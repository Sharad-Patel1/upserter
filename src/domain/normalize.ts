import type {
  NormalizationResult,
  NormalizedAttachment,
  NormalizedEnrichedProduct,
  NormalizedProductAttribute,
  SourceMetadata,
} from "@/types/upsert";

type UnknownRecord = Record<string, unknown>;

const IDENTITY_PATHS = [
  "externalRef",
  "externalReference",
  "external_reference",
  "productId",
  "productID",
  "sku",
  "code",
  "id",
] as const;

const OPTION_NAME_PATHS = [
  "optionName",
  "name",
  "title",
  "productName",
  "displayName",
  "productTitle",
  "shortDescription",
  "description",
] as const;

const CATEGORY_PATHS = [
  "categoryId",
  "tenderOptionCategoryId",
  "tenderOptionCategory.tenderOptionCategoryId",
  "tenderOptionCategory.id",
  "category.id",
  "category.categoryId",
  "category.tenderOptionCategoryId",
  "alternativeCategoryId",
  "mappedCategoryId",
  "suggestedCategoryId",
] as const;

const PRODUCT_WRAPPER_KEYS = [
  "product",
  "normalizedProduct",
  "enrichedProduct",
  "payload",
  "data",
  "result",
  "item",
  "response",
  "body",
] as const;

function normalizeLookupKey(value: string): string {
  return value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function asRecord(value: unknown): UnknownRecord | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  return value as UnknownRecord;
}

function readPath(input: UnknownRecord, path: string): unknown {
  const segments = path.split(".");
  let current: unknown = input;

  for (const segment of segments) {
    if (Array.isArray(current)) {
      const index = Number(segment);
      if (!Number.isInteger(index) || index < 0 || index >= current.length) {
        return undefined;
      }

      current = current[index];
      continue;
    }

    if (!current || typeof current !== "object") {
      return undefined;
    }

    const record = current as UnknownRecord;
    if (segment in record) {
      current = record[segment];
      continue;
    }

    const normalizedSegment = normalizeLookupKey(segment);
    const matchedKey = Object.keys(record).find(
      (key) => normalizeLookupKey(key) === normalizedSegment,
    );
    if (!matchedKey) {
      return undefined;
    }

    current = record[matchedKey];
  }

  return current;
}

function pickValue(input: UnknownRecord, paths: readonly string[]): unknown {
  for (const path of paths) {
    const value = readPath(input, path);
    if (value !== undefined && value !== null) {
      return value;
    }
  }

  return undefined;
}

function getProductSignal(record: UnknownRecord): {
  hasIdentity: boolean;
  hasOptionName: boolean;
  hasCategory: boolean;
} {
  return {
    hasIdentity: pickValue(record, IDENTITY_PATHS) !== undefined,
    hasOptionName: pickValue(record, OPTION_NAME_PATHS) !== undefined,
    hasCategory: pickValue(record, CATEGORY_PATHS) !== undefined,
  };
}

function hasAnyProductSignal(record: UnknownRecord): boolean {
  const signal = getProductSignal(record);
  return signal.hasIdentity || signal.hasOptionName || signal.hasCategory;
}

function compareProductSignals(
  left: ReturnType<typeof getProductSignal>,
  right: ReturnType<typeof getProductSignal>,
): number {
  if (left.hasOptionName !== right.hasOptionName) {
    return left.hasOptionName ? 1 : -1;
  }

  if (left.hasCategory !== right.hasCategory) {
    return left.hasCategory ? 1 : -1;
  }

  if (left.hasIdentity !== right.hasIdentity) {
    return left.hasIdentity ? 1 : -1;
  }

  return 0;
}

function collectLookupRoots(root: UnknownRecord): UnknownRecord[] {
  const queue: UnknownRecord[] = [root];
  const visited = new Set<UnknownRecord>(queue);
  const productRoots: Array<{
    record: UnknownRecord;
    signal: ReturnType<typeof getProductSignal>;
    priority: number;
  }> = [];
  let nextPriority = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) {
      continue;
    }

    for (const key of PRODUCT_WRAPPER_KEYS) {
      const nested = asRecord(current[key]);
      if (!nested || visited.has(nested)) {
        continue;
      }

      if (hasAnyProductSignal(nested)) {
        productRoots.push({
          record: nested,
          signal: getProductSignal(nested),
          priority: nextPriority++,
        });
      }

      visited.add(nested);
      queue.push(nested);
    }
  }

  productRoots.sort((left, right) => {
    const signalOrder = compareProductSignals(right.signal, left.signal);
    if (signalOrder !== 0) {
      return signalOrder;
    }

    return left.priority - right.priority;
  });

  return [...productRoots.map((entry) => entry.record), root];
}

function pickValueFromRoots(roots: readonly UnknownRecord[], paths: readonly string[]): unknown {
  for (const root of roots) {
    const value = pickValue(root, paths);
    if (value !== undefined && value !== null) {
      return value;
    }
  }

  return undefined;
}

function toStringValue(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  return undefined;
}

function toNumberValue(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return undefined;
}

function toStringArray(value: unknown): string[] | undefined {
  if (Array.isArray(value)) {
    const entries = value
      .map((entry) => toStringValue(entry))
      .filter((entry): entry is string => Boolean(entry));
    return entries.length > 0 ? entries : undefined;
  }

  const asString = toStringValue(value);
  if (!asString) {
    return undefined;
  }

  return [asString];
}

function normalizeAttributes(value: unknown): NormalizedProductAttribute[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const attributes: NormalizedProductAttribute[] = [];

  for (const entry of value) {
    if (typeof entry === "string") {
      const trimmed = entry.trim();
      if (!trimmed) {
        continue;
      }
      const splitIndex = trimmed.indexOf(":");
      if (splitIndex > -1) {
        const name = trimmed.slice(0, splitIndex).trim();
        const valuePart = trimmed.slice(splitIndex + 1).trim();
        if (name) {
          attributes.push({ name, value: valuePart || undefined });
        }
      } else {
        attributes.push({ name: trimmed });
      }
      continue;
    }

    const record = asRecord(entry);
    if (!record) {
      continue;
    }

    const name = toStringValue(
      pickValue(record, ["name", "label", "key", "attribute", "title"])
    );
    if (!name) {
      continue;
    }

    const attributeValue = toStringValue(
      pickValue(record, ["value", "val", "text", "description"])
    );
    attributes.push({ name, value: attributeValue });
  }

  return attributes.length > 0 ? attributes : undefined;
}

function findAttributeValue(
  attributes: NormalizedProductAttribute[] | undefined,
  matchers: string[]
): string | undefined {
  if (!attributes || attributes.length === 0) {
    return undefined;
  }

  for (const attribute of attributes) {
    const name = attribute.name.toLowerCase();
    if (matchers.some((matcher) => name.includes(matcher))) {
      return attribute.value;
    }
  }

  return undefined;
}

function buildProductSpecs(input: {
  specificationSummaryText?: string;
  specifications?: string[];
  attributes?: NormalizedProductAttribute[];
  family?: string;
}): string | undefined {
  const lines: string[] = [];

  if (input.specificationSummaryText) {
    lines.push(input.specificationSummaryText);
  }

  if (input.family) {
    lines.push(`Family: ${input.family}`);
  }

  if (input.specifications && input.specifications.length > 0) {
    lines.push("Specifications:");
    for (const spec of input.specifications) {
      lines.push(`- ${spec}`);
    }
  }

  if (input.attributes && input.attributes.length > 0) {
    lines.push("Attributes:");
    for (const attribute of input.attributes) {
      if (attribute.value) {
        lines.push(`- ${attribute.name}: ${attribute.value}`);
      } else {
        lines.push(`- ${attribute.name}`);
      }
    }
  }

  return lines.length > 0 ? lines.join("\n") : undefined;
}

function toBooleanValue(value: unknown): boolean | undefined {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true") {
      return true;
    }

    if (normalized === "false") {
      return false;
    }
  }

  return undefined;
}

function deriveFileName(url?: string, s3Key?: string): string | undefined {
  if (url) {
    try {
      const parsed = new URL(url);
      const pieces = parsed.pathname.split("/").filter(Boolean);
      if (pieces.length > 0) {
        return pieces[pieces.length - 1];
      }
    } catch {
      const pieces = url.split("/").filter(Boolean);
      if (pieces.length > 0) {
        return pieces[pieces.length - 1];
      }
    }
  }

  if (s3Key) {
    const pieces = s3Key.split("/").filter(Boolean);
    if (pieces.length > 0) {
      return pieces[pieces.length - 1];
    }
  }

  return undefined;
}

function normalizeAttachment(entry: unknown, sourceTag?: string): NormalizedAttachment | null {
  if (typeof entry === "string") {
    const url = toStringValue(entry);
    if (!url) {
      return null;
    }

    const fileName = deriveFileName(url);
    if (!fileName) {
      return null;
    }

    return {
      fileName,
      url,
      path: url,
      title: fileName,
      keyWords: sourceTag,
    };
  }

  const record = asRecord(entry);
  if (!record) {
    return null;
  }

  const url = toStringValue(
    pickValue(record, ["url", "href", "link", "downloadUrl", "sourceUrl"])
  );
  const path = toStringValue(
    pickValue(record, ["path", "filePath", "fileUrl", "file_url"])
  );
  const s3Key = toStringValue(
    pickValue(record, ["s3Key", "key", "objectKey"])
  );
  const contentBase64 = toStringValue(
    pickValue(record, ["contentBase64", "base64", "content", "data"])
  );

  if (!url && !path && !s3Key && !contentBase64) {
    return null;
  }

  const explicitFileName = toStringValue(
    pickValue(record, ["fileName", "filename", "name", "title"])
  );
  const fileName =
    explicitFileName ?? deriveFileName(url ?? path, s3Key);

  if (!fileName) {
    return null;
  }

  return {
    fileName,
    url,
    path: path ?? url,
    thumbnailUrl: toStringValue(
      pickValue(record, ["thumbnailUrl", "thumbUrl", "thumbnail", "thumb"])
    ),
    smallUrl: toStringValue(pickValue(record, ["smallUrl", "small"])),
    mediumUrl: toStringValue(pickValue(record, ["mediumUrl", "medium"])),
    largeUrl: toStringValue(pickValue(record, ["largeUrl", "large"])),
    s3Key,
    contentBase64,
    mimeType: toStringValue(pickValue(record, ["mimeType", "contentType", "type"])),
    size: toNumberValue(pickValue(record, ["size", "contentLength"])),
    hash: toStringValue(pickValue(record, ["hash", "sha256", "md5", "etag"])),
    title: toStringValue(pickValue(record, ["title", "documentTitle", "name"])) ??
      explicitFileName,
    keyWords:
      toStringValue(pickValue(record, ["keyWords", "keywords", "tags"])) ??
      sourceTag,
  };
}

function extractAttachments(inputs: UnknownRecord[]): NormalizedAttachment[] {
  const attachments: NormalizedAttachment[] = [];

  for (const input of inputs) {
    const candidateCollections: Array<{ value: unknown; tag?: string }> = [
      { value: pickValue(input, ["attachments"]) },
      { value: pickValue(input, ["files"]) },
      { value: pickValue(input, ["documents", "docs"]), tag: "document" },
      { value: pickValue(input, ["images", "imageUrls", "image_urls"]), tag: "image" },
      { value: pickValue(input, ["media"]), tag: "media" },
    ];

    for (const candidate of candidateCollections) {
      const value = candidate.value;
      if (Array.isArray(value)) {
        for (const entry of value) {
          const attachment = normalizeAttachment(entry, candidate.tag);
          if (attachment) {
            attachments.push(attachment);
          }
        }
        continue;
      }

      const record = asRecord(value);
      if (record) {
        const list = readPath(record, "list");
        if (Array.isArray(list)) {
          for (const entry of list) {
            const attachment = normalizeAttachment(entry, candidate.tag);
            if (attachment) {
              attachments.push(attachment);
            }
          }
        }
      }
    }
  }

  const deduped = new Map<string, NormalizedAttachment>();
  for (const attachment of attachments) {
    const dedupeKey = `${attachment.fileName.toLowerCase()}|${attachment.hash ?? ""}|${
      attachment.size ?? ""
    }`;
    if (!deduped.has(dedupeKey)) {
      deduped.set(dedupeKey, attachment);
    }
  }

  return [...deduped.values()];
}

export function normalizeEnrichedProduct(
  payload: unknown,
  source: SourceMetadata
): NormalizationResult {
  const root = asRecord(payload);
  if (!root) {
    return {
      ok: false,
      error: {
        code: "invalid_payload",
        message: "Expected enriched product payload to be a JSON object",
      },
    };
  }

  const lookupRoots = collectLookupRoots(root);
  const lookup = (paths: readonly string[]) => pickValueFromRoots(lookupRoots, paths);

  const externalRef = toStringValue(
    lookup(IDENTITY_PATHS)
  );

  if (!externalRef) {
    return {
      ok: false,
      error: {
        code: "missing_identity",
        message: "Missing canonical external reference",
      },
    };
  }

  const optionName = toStringValue(
    lookup(OPTION_NAME_PATHS)
  );
  const categoryId = toNumberValue(
    lookup(CATEGORY_PATHS)
  );

  const normalizedOptionName = optionName ?? externalRef;

  if (!normalizedOptionName || categoryId === undefined) {
    return {
      ok: false,
      error: {
        code: "missing_required_fields",
        message: "Missing required fields optionName and/or categoryId",
      },
    };
  }

  const attributes = normalizeAttributes(lookup(["attributes", "attributeList"]));
  const specificationSummaryText = toStringValue(
    lookup(["specificationSummaryText", "specSummary", "summaryText"])
  );
  const specifications = toStringArray(lookup(["specifications", "specs"]));
  const family = toStringValue(lookup(["family", "collection"]));
  const colourAttribute = findAttributeValue(attributes, ["colour", "color"]);
  const finishAttribute = findAttributeValue(attributes, ["finish"]);
  const shortDescription = toStringValue(
    lookup(["shortDescription", "short_description", "summary"])
  );
  const sku =
    toStringValue(lookup(["sku", "vendorModel", "vendor_model", "code"])) ??
    externalRef;
  const vendorModel =
    toStringValue(lookup(["vendorModel", "vendor_model"])) ?? sku;
  const relatedProducts = toStringArray(
    lookup(["relatedProducts", "related", "related_products"])
  );

  const productSpecs = buildProductSpecs({
    specificationSummaryText,
    specifications,
    attributes,
    family,
  });

  const normalized: NormalizedEnrichedProduct = {
    source,
    sku,
    externalRef,
    optionName: normalizedOptionName,
    categoryId,
    businessUnitId: toNumberValue(
      lookup(["businessUnitId", "businessUnit.businessUnitId"])
    ),
    resourceCodeId: toNumberValue(
      lookup(["resourceCodeId", "resourceCode.resourceCodeId"])
    ),
    supplierId: toNumberValue(lookup(["supplierId", "supplier.id"])),
    supplierName: toStringValue(lookup(["supplierName", "supplier.name"])),
    supplierConfidence: toStringValue(
      lookup(["supplierConfidence", "supplier.confidence"])
    ),
    addendum: toStringValue(lookup(["addendum"])),
    brand: toStringValue(lookup(["brand"])),
    shortDescription,
    clientDescription: toStringValue(
      lookup(["clientDescription", "client_description"])
    ) ?? shortDescription,
    colourList:
      toStringValue(lookup(["colourList", "colorList"])) ??
      colourAttribute,
    colourName:
      toStringValue(lookup(["colourName", "colorName"])) ??
      finishAttribute,
    productDescription: toStringValue(
      lookup(["productDescription", "description", "product_description"])
    ),
    productSpecs:
      toStringValue(lookup(["productSpecs"])) ?? productSpecs,
    specificationSummaryText,
    specifications,
    attributes,
    family,
    productUrl: toStringValue(lookup(["productUrl", "url"])),
    vendorModel,
    defaultQuantity: toNumberValue(lookup(["defaultQuantity", "quantity"])),
    priceDisplay: toNumberValue(lookup(["priceDisplay"])),
    optionAvailable: toStringValue(lookup(["optionAvailable", "available"])),
    optionExpired: toStringValue(lookup(["optionExpired", "expired"])),
    allHouseTypes: toBooleanValue(lookup(["allHouseTypes"])),
    assembly: toBooleanValue(lookup(["assembly"])),
    canEditColour: toBooleanValue(lookup(["canEditColour", "canEditColor"])),
    colourRequired: toBooleanValue(
      lookup(["colourRequired", "colorRequired"])
    ),
    estimatingRequired: toBooleanValue(lookup(["estimatingRequired"])),
    hiddenOption: toBooleanValue(lookup(["hiddenOption", "hidden"])),
    optionOverrideable: toBooleanValue(lookup(["optionOverrideable"])),
    quantityRequired: toBooleanValue(lookup(["quantityRequired"])),
    selectionPlaceHolder: toNumberValue(
      lookup(["selectionPlaceHolder", "selectionPlaceholder"])
    ),
    useHeroImage: toBooleanValue(lookup(["useHeroImage"])),
    visibleByMyHome: toBooleanValue(
      lookup(["visibleByMyHome", "visibleMyHome"])
    ),
    visibleBySales: toBooleanValue(lookup(["visibleBySales", "visibleSales"])),
    visibleBySelections: toBooleanValue(
      lookup(["visibleBySelections", "visibleSelections"])
    ),
    attachments: extractAttachments(lookupRoots),
    relatedProducts,
    raw: root,
  };

  return { ok: true, value: normalized };
}

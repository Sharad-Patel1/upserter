import type {
  NormalizationResult,
  NormalizedAttachment,
  NormalizedEnrichedProduct,
  NormalizedProductAttribute,
  SourceMetadata,
} from "@/types/upsert";

type UnknownRecord = Record<string, unknown>;

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

function extractAttachments(input: UnknownRecord): NormalizedAttachment[] {
  const candidateCollections: Array<{ value: unknown; tag?: string }> = [
    { value: pickValue(input, ["attachments"]) },
    { value: pickValue(input, ["files"]) },
    { value: pickValue(input, ["documents", "docs"]), tag: "document" },
    { value: pickValue(input, ["images", "imageUrls", "image_urls"]), tag: "image" },
    { value: pickValue(input, ["media"]), tag: "media" },
  ];

  const attachments: NormalizedAttachment[] = [];

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

  const externalRef = toStringValue(
    pickValue(root, [
      "externalRef",
      "externalReference",
      "external_reference",
      "productId",
      "productID",
      "sku",
      "code",
      "id",
    ])
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
    pickValue(root, [
      "optionName",
      "name",
      "title",
      "productName",
      "displayName",
      "productTitle",
      "shortDescription",
      "description",
    ])
  );
  const categoryId = toNumberValue(
    pickValue(root, [
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
    ])
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

  const attributes = normalizeAttributes(pickValue(root, ["attributes", "attributeList"]));
  const specificationSummaryText = toStringValue(
    pickValue(root, ["specificationSummaryText", "specSummary", "summaryText"])
  );
  const specifications = toStringArray(pickValue(root, ["specifications", "specs"]));
  const family = toStringValue(pickValue(root, ["family", "collection"]));
  const colourAttribute = findAttributeValue(attributes, ["colour", "color"]);
  const finishAttribute = findAttributeValue(attributes, ["finish"]);
  const shortDescription = toStringValue(
    pickValue(root, ["shortDescription", "short_description", "summary"])
  );
  const sku =
    toStringValue(pickValue(root, ["sku", "vendorModel", "vendor_model", "code"])) ??
    externalRef;
  const vendorModel =
    toStringValue(pickValue(root, ["vendorModel", "vendor_model"])) ?? sku;
  const relatedProducts = toStringArray(
    pickValue(root, ["relatedProducts", "related", "related_products"])
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
      pickValue(root, ["businessUnitId", "businessUnit.businessUnitId"])
    ),
    resourceCodeId: toNumberValue(
      pickValue(root, ["resourceCodeId", "resourceCode.resourceCodeId"])
    ),
    supplierId: toNumberValue(pickValue(root, ["supplierId", "supplier.id"])),
    supplierName: toStringValue(pickValue(root, ["supplierName", "supplier.name"])),
    supplierConfidence: toStringValue(
      pickValue(root, ["supplierConfidence", "supplier.confidence"])
    ),
    addendum: toStringValue(pickValue(root, ["addendum"])),
    brand: toStringValue(pickValue(root, ["brand"])),
    shortDescription,
    clientDescription: toStringValue(
      pickValue(root, ["clientDescription", "client_description"])
    ) ?? shortDescription,
    colourList:
      toStringValue(pickValue(root, ["colourList", "colorList"])) ??
      colourAttribute,
    colourName:
      toStringValue(pickValue(root, ["colourName", "colorName"])) ??
      finishAttribute,
    productDescription: toStringValue(
      pickValue(root, ["productDescription", "description", "product_description"])
    ),
    productSpecs:
      toStringValue(pickValue(root, ["productSpecs"])) ?? productSpecs,
    specificationSummaryText,
    specifications,
    attributes,
    family,
    productUrl: toStringValue(pickValue(root, ["productUrl", "url"])),
    vendorModel,
    defaultQuantity: toNumberValue(pickValue(root, ["defaultQuantity", "quantity"])),
    priceDisplay: toNumberValue(pickValue(root, ["priceDisplay"])),
    optionAvailable: toStringValue(pickValue(root, ["optionAvailable", "available"])),
    optionExpired: toStringValue(pickValue(root, ["optionExpired", "expired"])),
    allHouseTypes: toBooleanValue(pickValue(root, ["allHouseTypes"])),
    assembly: toBooleanValue(pickValue(root, ["assembly"])),
    canEditColour: toBooleanValue(pickValue(root, ["canEditColour", "canEditColor"])),
    colourRequired: toBooleanValue(
      pickValue(root, ["colourRequired", "colorRequired"])
    ),
    estimatingRequired: toBooleanValue(pickValue(root, ["estimatingRequired"])),
    hiddenOption: toBooleanValue(pickValue(root, ["hiddenOption", "hidden"])),
    optionOverrideable: toBooleanValue(pickValue(root, ["optionOverrideable"])),
    quantityRequired: toBooleanValue(pickValue(root, ["quantityRequired"])),
    selectionPlaceHolder: toNumberValue(
      pickValue(root, ["selectionPlaceHolder", "selectionPlaceholder"])
    ),
    useHeroImage: toBooleanValue(pickValue(root, ["useHeroImage"])),
    visibleByMyHome: toBooleanValue(
      pickValue(root, ["visibleByMyHome", "visibleMyHome"])
    ),
    visibleBySales: toBooleanValue(pickValue(root, ["visibleBySales", "visibleSales"])),
    visibleBySelections: toBooleanValue(
      pickValue(root, ["visibleBySelections", "visibleSelections"])
    ),
    attachments: extractAttachments(root),
    relatedProducts,
    raw: root,
  };

  return { ok: true, value: normalized };
}

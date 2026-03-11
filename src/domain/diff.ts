import type { TenderOptionModel } from "@/types/interfaces.codegen";
import type { DeepPartial, JsonPatchOperation } from "@/types/upsert";

const TRACKED_PATHS: readonly string[] = [
  "addendum",
  "allHouseTypes",
  "assembly",
  "brand",
  "businessUnit.businessUnitId",
  "canEditColour",
  "clientDescription",
  "colourList",
  "colourName",
  "colourRequired",
  "customVal1",
  "defaultQuantity",
  "estimatingRequired",
  "hiddenOption",
  "optionAvailable",
  "optionExpired",
  "optionName",
  "optionOverrideable",
  "priceDisplay",
  "productDescription",
  "productSpecs",
  "productUrl",
  "quantityRequired",
  "resourceCode.resourceCodeId",
  "resource.resourceId",
  "selectionPlaceHolder",
  "tenderOptionCategory.tenderOptionCategoryId",
  "useHeroImage",
  "vendorModel",
  "visibleByMyHome",
  "visibleBySales",
  "visibleBySelections",
];

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  return value as Record<string, unknown>;
}

function getPath(record: Record<string, unknown>, path: string): unknown {
  const segments = path.split(".");
  let current: unknown = record;

  for (const segment of segments) {
    const currentRecord = asRecord(current);
    if (!currentRecord) {
      return undefined;
    }

    current = currentRecord[segment];
  }

  return current;
}

function setPath(
  record: Record<string, unknown>,
  path: string,
  value: unknown,
): void {
  const segments = path.split(".");
  let current: Record<string, unknown> = record;

  for (let index = 0; index < segments.length - 1; index += 1) {
    const segment = segments[index];
    if (!segment) {
      continue;
    }
    const next = current[segment];
    const asObject = asRecord(next);

    if (asObject) {
      current = asObject;
      continue;
    }

    const created: Record<string, unknown> = {};
    current[segment] = created;
    current = created;
  }

  const finalSegment = segments[segments.length - 1];
  if (!finalSegment) {
    return;
  }

  current[finalSegment] = value;
}

function deepEqual(left: unknown, right: unknown): boolean {
  if (left === right) {
    return true;
  }

  if (typeof left !== typeof right) {
    return false;
  }

  if (left === null || right === null) {
    return left === right;
  }

  if (Array.isArray(left) || Array.isArray(right)) {
    if (!Array.isArray(left) || !Array.isArray(right)) {
      return false;
    }

    if (left.length !== right.length) {
      return false;
    }

    for (let index = 0; index < left.length; index += 1) {
      if (!deepEqual(left[index], right[index])) {
        return false;
      }
    }

    return true;
  }

  if (typeof left === "object" && typeof right === "object") {
    const leftRecord = left as Record<string, unknown>;
    const rightRecord = right as Record<string, unknown>;

    const leftKeys = Object.keys(leftRecord).sort();
    const rightKeys = Object.keys(rightRecord).sort();

    if (!deepEqual(leftKeys, rightKeys)) {
      return false;
    }

    for (const key of leftKeys) {
      if (!deepEqual(leftRecord[key], rightRecord[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

function toPatchPath(path: string): string {
  return `/${path
    .split(".")
    .map((segment) => segment.replaceAll("~", "~0").replaceAll("/", "~1"))
    .join("/")}`;
}

export interface DiffResult {
  changedPaths: string[];
  operations: JsonPatchOperation[];
  mergePayload: DeepPartial<TenderOptionModel>;
}

export function buildTenderOptionDiff(
  existing: Record<string, unknown>,
  target: DeepPartial<TenderOptionModel>,
): DiffResult {
  const operations: JsonPatchOperation[] = [];
  const mergePayload: DeepPartial<TenderOptionModel> = {};
  const changedPaths: string[] = [];

  for (const path of TRACKED_PATHS) {
    const targetValue = getPath(target, path);
    if (targetValue === undefined) {
      continue;
    }

    const existingValue = getPath(existing, path);
    if (deepEqual(existingValue, targetValue)) {
      continue;
    }

    changedPaths.push(path);
    setPath(mergePayload, path, targetValue);
    operations.push({
      op: existingValue === undefined ? "add" : "replace",
      path: toPatchPath(path),
      value: targetValue,
    });
  }

  operations.sort((left, right) => left.path.localeCompare(right.path));
  changedPaths.sort((left, right) => left.localeCompare(right));

  return {
    changedPaths,
    operations,
    mergePayload,
  };
}

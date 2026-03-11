import type { TenderOptionModel } from "@/types/interfaces.codegen";
import type { DeepPartial, NormalizedEnrichedProduct } from "@/types/upsert";

export interface TenderOptionMappingDefaults {
  businessUnitId: number;
  resourceCodeId: number;
  nowIso: string;
  farFutureIso: string;
  externalReferenceKey: string;
}

export interface MappedTenderOption {
  createPayload: DeepPartial<TenderOptionModel>;
}

function withDefaultBoolean(
  value: boolean | undefined,
  fallback: boolean,
): boolean {
  return value ?? fallback;
}

function withDefaultNumber(
  value: number | undefined,
  fallback: number,
): number {
  return value ?? fallback;
}

function optionalField<T>(value: T | undefined): T | undefined {
  return value;
}

export function mapTenderOptionModel(
  product: NormalizedEnrichedProduct,
  defaults: TenderOptionMappingDefaults,
): MappedTenderOption {
  const businessUnitId = product.businessUnitId ?? defaults.businessUnitId;
  const resourceCodeId = product.resourceCodeId ?? defaults.resourceCodeId;
  const brand = product.brand ?? product.supplierName;
  const vendorModel = product.vendorModel ?? product.sku;

  const createPayload: DeepPartial<TenderOptionModel> = {
    optionName: product.optionName,
    optionAvailable: product.optionAvailable ?? defaults.nowIso,
    optionExpired: product.optionExpired ?? defaults.farFutureIso,
    allHouseTypes: withDefaultBoolean(product.allHouseTypes, true),
    assembly: withDefaultBoolean(product.assembly, false),
    canEditColour: withDefaultBoolean(product.canEditColour, false),
    colourRequired: withDefaultBoolean(product.colourRequired, false),
    estimatingRequired: withDefaultBoolean(product.estimatingRequired, true),
    hiddenOption: withDefaultBoolean(product.hiddenOption, false),
    optionOverrideable: withDefaultBoolean(product.optionOverrideable, true),
    quantityRequired: withDefaultBoolean(product.quantityRequired, false),
    selectionPlaceHolder: withDefaultNumber(product.selectionPlaceHolder, 0),
    useHeroImage: withDefaultBoolean(product.useHeroImage, false),
    visibleByMyHome: withDefaultBoolean(product.visibleByMyHome, true),
    visibleBySales: withDefaultBoolean(product.visibleBySales, true),
    visibleBySelections: withDefaultBoolean(product.visibleBySelections, true),
    businessUnit: {
      businessUnitId,
    },
    resourceCode: {
      resourceCodeId,
    },
    resource: product.supplierId
      ? {
          resourceId: product.supplierId,
        }
      : undefined,
    tenderOptionCategory: {
      tenderOptionCategoryId: product.categoryId,
    },
    // secondary lookup fallback in case external references are not indexed for this tenant
    customVal1: product.externalRef,
    externalReferenceGroup: {
      externalReferences: {
        list: [
          {
            key: defaults.externalReferenceKey,
            value: product.externalRef,
          },
        ],
      },
    },
    addendum: optionalField(product.addendum),
    brand: optionalField(brand),
    clientDescription: optionalField(product.clientDescription),
    colourList: optionalField(product.colourList),
    colourName: optionalField(product.colourName),
    defaultQuantity: optionalField(product.defaultQuantity),
    priceDisplay: optionalField(product.priceDisplay),
    productDescription: optionalField(product.productDescription),
    productSpecs: optionalField(product.productSpecs),
    productUrl: optionalField(product.productUrl),
    vendorModel: optionalField(vendorModel),
  };

  return {
    createPayload,
  };
}

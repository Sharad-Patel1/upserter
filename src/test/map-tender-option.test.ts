import { describe, expect, it } from "bun:test";

import { mapTenderOptionModel } from "@/domain/map-tender-option";

describe("mapTenderOptionModel", () => {
  it("includes required clickhome tender option fields for creates", () => {
    const mapped = mapTenderOptionModel(
      {
        source: {
          s3Key: "enriched/product.json",
        },
        sku: "SKU-001",
        externalRef: "SKU-001",
        optionName: "Solar Panel",
        categoryId: 22,
        attachments: [],
        raw: {},
      },
      {
        businessUnitId: 1,
        resourceCodeId: 9,
        nowIso: "2026-03-11T00:00:00.000Z",
        farFutureIso: "2099-12-31T00:00:00.000Z",
        externalReferenceKey: "ProductExternalRef",
      },
    );

    expect(mapped.createPayload).toMatchObject({
      optionName: "Solar Panel",
      optionAvailable: "2026-03-11T00:00:00.000Z",
      optionExpired: "2099-12-31T00:00:00.000Z",
      businessUnit: {
        businessUnitId: 1,
      },
      resourceCode: {
        resourceCodeId: 9,
      },
      tenderOptionCategory: {
        tenderOptionCategoryId: 22,
      },
      assemblyOptions: {
        list: [],
      },
      componentOptions: {
        list: [],
      },
      interfaceTenderOptionCosts: {
        list: [],
      },
      placeholderLinks: {
        list: [],
      },
      tenderOptionAttributeLinks: {
        list: [],
      },
      tenderOptionDocs: {
        list: [],
      },
      tenderOptionHouseLinks: {
        list: [],
      },
      tenderOptionPrices: {
        list: [],
      },
      tenderPriceReviews: {
        list: [],
      },
      tenderSurcharges: {
        list: [],
      },
    });
  });
});

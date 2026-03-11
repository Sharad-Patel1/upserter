import { describe, expect, it } from "bun:test";

import { buildTenderOptionDiff } from "@/domain/diff";

describe("buildTenderOptionDiff", () => {
  it("returns empty diff when tracked fields are unchanged", () => {
    const existing = {
      optionName: "Stone Benchtop",
      visibleBySales: true,
      resourceCode: {
        resourceCodeId: 5,
      },
    };

    const target = {
      optionName: "Stone Benchtop",
      visibleBySales: true,
      resourceCode: {
        resourceCodeId: 5,
      },
    };

    const diff = buildTenderOptionDiff(existing, target);

    expect(diff.changedPaths).toHaveLength(0);
    expect(diff.operations).toHaveLength(0);
  });

  it("builds stable json patch operations for changed fields", () => {
    const existing = {
      optionName: "Old Name",
      visibleBySales: true,
      businessUnit: {
        businessUnitId: 1,
      },
    };

    const target = {
      optionName: "New Name",
      visibleBySales: false,
      businessUnit: {
        businessUnitId: 1,
      },
    };

    const diff = buildTenderOptionDiff(existing, target);

    expect(diff.changedPaths).toEqual(["optionName", "visibleBySales"]);
    expect(diff.operations).toEqual([
      {
        op: "replace",
        path: "/optionName",
        value: "New Name",
      },
      {
        op: "replace",
        path: "/visibleBySales",
        value: false,
      },
    ]);
  });

  it("keeps required tender option fields in merge payloads for sparse updates", () => {
    const existing = {
      optionName: "Existing Name",
      optionAvailable: "2026-01-01T00:00:00.000Z",
      optionExpired: "2099-12-31T00:00:00.000Z",
      allHouseTypes: true,
      assembly: false,
      canEditColour: false,
      colourRequired: false,
      estimatingRequired: true,
      hiddenOption: false,
      optionOverrideable: true,
      quantityRequired: false,
      selectionPlaceHolder: 0,
      useHeroImage: false,
      visibleByMyHome: true,
      visibleBySales: true,
      visibleBySelections: true,
      businessUnit: {
        businessUnitId: 1,
      },
      resourceCode: {
        resourceCodeId: 5,
      },
      tenderOptionCategory: {
        tenderOptionCategoryId: 7,
      },
      productDescription: "Old description",
    };

    const target = {
      optionName: "Existing Name",
      optionAvailable: "2026-01-01T00:00:00.000Z",
      optionExpired: "2099-12-31T00:00:00.000Z",
      allHouseTypes: true,
      assembly: false,
      canEditColour: false,
      colourRequired: false,
      estimatingRequired: true,
      hiddenOption: false,
      optionOverrideable: true,
      quantityRequired: false,
      selectionPlaceHolder: 0,
      useHeroImage: false,
      visibleByMyHome: true,
      visibleBySales: true,
      visibleBySelections: true,
      businessUnit: {
        businessUnitId: 1,
      },
      resourceCode: {
        resourceCodeId: 5,
      },
      tenderOptionCategory: {
        tenderOptionCategoryId: 7,
      },
      productDescription: "New description",
    };

    const diff = buildTenderOptionDiff(existing, target);

    expect(diff.changedPaths).toEqual(["productDescription"]);
    expect(diff.mergePayload).toMatchObject({
      optionName: "Existing Name",
      optionAvailable: "2026-01-01T00:00:00.000Z",
      optionExpired: "2099-12-31T00:00:00.000Z",
      businessUnit: {
        businessUnitId: 1,
      },
      resourceCode: {
        resourceCodeId: 5,
      },
      tenderOptionCategory: {
        tenderOptionCategoryId: 7,
      },
      productDescription: "New description",
    });
  });
});

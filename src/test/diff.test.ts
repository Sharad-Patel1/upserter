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
});

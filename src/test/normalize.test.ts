import { describe, expect, it } from "bun:test";

import { normalizeEnrichedProduct } from "@/domain/normalize";

describe("normalizeEnrichedProduct", () => {
  it("normalizes a valid enriched payload", () => {
    const result = normalizeEnrichedProduct(
      {
        externalRef: "SKU-001",
        optionName: "Solar Panel",
        categoryId: 22,
        businessUnitId: 1,
        resourceCodeId: 9,
        visibleBySales: true,
        attachments: [
          {
            url: "https://cdn.example.com/docs/spec.pdf",
            fileName: "spec.pdf",
          },
        ],
      },
      {
        s3Key: "enriched/products/solar-panel.json",
      }
    );

    expect(result.ok).toBeTrue();
    if (!result.ok) {
      return;
    }

    expect(result.value.externalRef).toBe("SKU-001");
    expect(result.value.optionName).toBe("Solar Panel");
    expect(result.value.categoryId).toBe(22);
    expect(result.value.attachments).toHaveLength(1);
    expect(result.value.attachments[0]?.fileName).toBe("spec.pdf");
  });

  it("returns missing_identity when external reference is missing", () => {
    const result = normalizeEnrichedProduct(
      {
        optionName: "No Identity",
        categoryId: 3,
      },
      {
        s3Key: "enriched/no-identity.json",
      }
    );

    expect(result.ok).toBeFalse();
    if (result.ok) {
      return;
    }

    expect(result.error.code).toBe("missing_identity");
  });
});

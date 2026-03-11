import { describe, expect, it } from "bun:test";

import { S3Source, createKeyMatcher } from "@/infra/s3-source";

describe("S3Source", () => {
  it("matches enriched glob semantics", () => {
    const matcher = createKeyMatcher("enriched/**/*.json");

    expect(matcher("enriched/a.json")).toBeTrue();
    expect(matcher("enriched/sub/a.json")).toBeTrue();
    expect(matcher("enriched/sub/a.txt")).toBeFalse();
    expect(matcher("other/sub/a.json")).toBeFalse();
  });

  it("paginates and filters json keys", async () => {
    const listCalls: Array<Record<string, unknown>> = [];

    const source = new S3Source({
      bucket: "bucket",
      accessKeyId: "key",
      secretAccessKey: "secret",
      client: {
        async list(input?: Record<string, unknown>) {
          listCalls.push(input ?? {});
          if (listCalls.length === 1) {
            return {
              isTruncated: true,
              nextContinuationToken: "next-token",
              contents: [
                { key: "enriched/a.json", size: 10 },
                { key: "enriched/a.txt", size: 20 },
              ],
            };
          }

          return {
            isTruncated: false,
            contents: [{ key: "enriched/sub/b.json", size: 30 }],
          };
        },
        file(path: string) {
          return {
            async json() {
              return { path };
            },
            async arrayBuffer() {
              return new TextEncoder().encode(path).buffer;
            },
          };
        },
      },
    });

    const keys: string[] = [];
    for await (const object of source.listJsonObjects({
      prefixPattern: "enriched/**/*.json",
    })) {
      keys.push(object.key);
    }

    expect(keys).toEqual(["enriched/a.json", "enriched/sub/b.json"]);
    expect(listCalls).toHaveLength(2);
    expect(listCalls[1]?.continuationToken).toBe("next-token");
  });
});

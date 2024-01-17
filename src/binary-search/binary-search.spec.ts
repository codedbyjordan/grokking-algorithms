import { expect, test } from "bun:test";
import { binarySearch } from "./binary-search";

const arr = Array.from({ length: 100 }, (_, i) => i + 1);

test("Binary search", () => {
  const result = binarySearch(arr, 42);
  expect(result).toBe(41);
});

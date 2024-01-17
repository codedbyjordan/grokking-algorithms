import { expect, test } from "bun:test";
import { recursiveArrayLength } from "./recursive-array-length";

const arr = Array.from({ length: 100 });

test("4.2: Recursive array length", () => {
  const result = recursiveArrayLength(arr);
  expect(result).toBe(100);
});

import { expect, test } from "bun:test";
import { quicksort } from "./quicksort";

const unsortedRankings = [257, 305, 106, 26, 377, 15];
const sortedRanking = [15, 26, 106, 257, 305, 377];

test("Selection sort", () => {
  const result = quicksort(unsortedRankings);
  expect(result).toEqual(sortedRanking);
});

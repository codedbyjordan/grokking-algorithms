export function binarySearch(
  input: number[],
  searchValue: number
): number | null {
  let low = 0;
  let high = input.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (searchValue === input[mid]) return mid;

    if (searchValue < input[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

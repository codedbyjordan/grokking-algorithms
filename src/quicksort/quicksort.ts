export function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];

  const smaller = arr.filter((item) => item < pivot);
  const greater = arr.filter((item) => item > pivot);

  return [...quicksort(smaller), pivot, ...quicksort(greater)];
}

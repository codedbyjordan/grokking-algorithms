export function recursiveArrayLength(arr: any[]): number {
  if (arr.length === 0) return 0;
  return 1 + recursiveArrayLength(arr.slice(1));
}

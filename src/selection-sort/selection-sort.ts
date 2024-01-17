function findSmallest(arr: number[]) {
  return Math.min(...arr);
}

export function selectionSort(arr: number[]) {
  let sorted: number[] = [];
  let copy = arr;

  for (let i = 0; i < arr.length; i++) {
    const smallest = findSmallest(copy);
    copy = copy.filter((item) => item !== smallest);
    sorted.push(smallest);
  }

  return sorted;
}

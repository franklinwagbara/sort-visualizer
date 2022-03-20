import swap from "./swap";
const transition = [];

const quickSort = (A) => {
  const items = [...A];

  sort(items, 0, items.length - 1);
  return transition;
};

const sort = (items, start, end) => {
  if (start >= end) return;

  let boundary = partition(items, start, end);

  sort(items, start, boundary - 1);
  sort(items, boundary + 1, end);
};

const partition = (items, start, end) => {
  let pivot = items[end];
  let boundary = start - 1;

  for (let i = start; i <= end; i++) {
    if (items[i] <= pivot) {
      swap(items, i, ++boundary);
      transition.push([...items]);
    }
  }

  return boundary;
};

export default quickSort;

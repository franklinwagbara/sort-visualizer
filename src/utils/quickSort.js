const quickSort = (A) => {
  const items = [...A];
  const transition = [];
  sort(items, 0, items.length);
};

function sort(items, start, end) {
  if (start >= end) return;

  let bountary = partition(items, start, end);

  sort(items, )
}

export default quickSort;

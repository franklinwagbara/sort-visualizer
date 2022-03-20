import swap from "./swap";

const bubbleSort = (A) => {
  if (A.length < 2) return items;

  const items = [...A];
  const transition = [];
  let isSwap = true;

  while (isSwap) {
    isSwap = false;
    for (let i = 1; i < items.length; i++) {
      if (items[i] < items[i - 1]) {
        swap(items, i, i - 1);
        isSwap = true;
        transition.push([...items]);
      }
    }
  }
  return transition;
};

export default bubbleSort;

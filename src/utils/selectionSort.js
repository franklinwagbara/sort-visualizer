import swap from "./swap";
import min from "./min";

const selectionSort = (A) => {
  const transition = [];
  const items = [...A];
  for (let l = 0; l < items.length; l++) {
    const j = min(items, l);
    swap(items, l, j);
    transition.push([...items]);
  }
  return transition;
};
export default selectionSort;

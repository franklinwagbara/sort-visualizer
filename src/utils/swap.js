const swap = (items, i, j) => {
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
};

export default swap;

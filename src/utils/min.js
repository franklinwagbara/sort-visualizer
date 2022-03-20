const min = (items, start = 0) => {
  let minimum = start;

  for (let i = start; i < items.length; i++) {
    if (items[i] < items[minimum]) minimum = i;
  }
  return minimum;
};

export default min;

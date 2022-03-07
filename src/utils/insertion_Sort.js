const insertion_Sort = (A) => {
  const transition = [];
  const items = [...A];
  let part = 0;

  for (var i = 1; i < items.length; i++) {
    var temp = items[i];
    var j = i - 1;
    while (j >= 0 && temp < items[j]) {
      items[j + 1] = items[j];
      transition.push([...items]);
      j--;
    }
    items[j + 1] = temp;
    transition.push([...items]);
  }
  return transition;
};

export default insertion_Sort;

const sumMinElem = (arr) => {
  if (typeof arr === 'string' || arr.length === 0) {
    return [];
  }
  if (arr.length < 2) {
    return arr[0];
  }
  for (let value of arr) {
    if (typeof value !== 'number') {
      return [];
    }
  }
  const newArr = arr.sort();
  const sum = newArr[0] + newArr[1];
  return sum;
};

export default sumMinElem;

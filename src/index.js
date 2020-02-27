exports.min = function min(array) {
  if (!array || !array.length) {
      return 0;
  }
  return array.reduce((min, number) => number < min ? number : min, 0);
};

exports.max = function max (array) {
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce((max, number) => number > max ? number : max, 0);
};

exports.avg = function avg(array) {
  if (!array || !array.length) {
      return 0;
  }
  const sum = array.reduce((acc, number) => acc + number, 0);
  return sum / array.length
};

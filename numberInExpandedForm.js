const expandedForm = int => {
  const arr = int.toString().split('');
  let expanded = [];
  let counter = arr.length - 1;
  arr.forEach(elem => {
    if (elem != 0) {
      for (let i = counter; i > 0; i--) {
        elem += '0';
      }
      expanded.push(elem);
    }
    counter--;
  });
  return expanded.join(' + ');
};

// Smart person answer

const expandedForm = n =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(' + ');

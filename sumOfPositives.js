// Sum positive values in array

const positiveSum = arr => {
  let sum = 0;
  arr.forEach(x => (x > 0 ? (sum += x) : (sum = sum)));
  return sum;
};

// other answer

const positiveSum = arr => arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);

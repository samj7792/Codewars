const factorial = n => {
  if (n == 0) {
    return 1;
  } else if (n < 0 || n > 12) {
    throw RangeError;
  } else {
    let sum = 1;
    for (let i = 2; i <= n; i++) {
      sum *= i;
    }
    return sum;
  }
};

// other answer

factorial = n => {
  if (n < 0 || n > 12) throw RangeError;
  return n > 1 ? n * factorial(n - 1) : 1;
};

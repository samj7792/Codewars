// A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible or not by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

let count = 0;
const seven = m => {
  if (m == 0) {
    return [0, 0];
  }
  count++;
  console.log(`count: ${count}`);
  let x = Math.floor(m / 10);
  console.log(x);
  let y = m % 10;
  console.log(y);

  let test = x - 2 * y;
  console.log(test);
  if (test > 99) {
    return seven(test);
  } else {
    const sol = [test, count];
    count = 0;
    return sol;
  }
};

console.log(seven(371));

// other answer

const seven = (m, n = 0) =>
  m < 100 ? [m, n] : seven(Math.floor(m / 10) - 2 * (m % 10), ++n);

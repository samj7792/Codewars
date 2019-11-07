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

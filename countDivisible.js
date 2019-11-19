// Complete the function that takes 3 numbers x, y and k where x <= y and returns the number of integers within the range [x...y] inclusive that are divisible by k

const divisibleCount = (x, y, k) => {
  console.log(`${x} ${y} ${k}`);
  let sols = 0;
  let j = 0;

  for (let i = x; i <= x + k; ++i) {
    if (i % k == 0) {
      j = i;
      break;
    }
  }
  for (let i = j; i <= y; i += k) {
    if (i % k == 0) {
      ++sols;
    }
  }

  //   for (let i = x; i <= x; ++i) {
  //     if (i % k == 0) {
  //       ++sols;
  //     }
  //   }

  console.log(sols);
  return sols;
};

console.log(divisibleCount(6, 11, 2));

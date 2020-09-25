// Find the sum of the numbers in an array that do not repeat

const arr = [1, 3, 1, 7, 3, 8];

// const repeats = (arr) =>
//   arr
//     .filter((x) => {
//       if (arr.indexOf(x) == arr.lastIndexOf(x)) {
//         return x;
//       }
//     })
//     .reduce((acc, curr) => acc + curr);

// sightly simplified

const repeats = (arr) =>
  arr
    .filter((x) => arr.indexOf(x) == arr.lastIndexOf(x))
    .reduce((acc, curr) => acc + curr);

console.log(repeats(arr));

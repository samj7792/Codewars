// const sumMix = x => {
//   sum = 0;
//   x.map(x => (sum += parseInt(x)));
//   return sum;
// };

const sumMix = x => x.reduce((a, b) => +b + a, 0);

console.log(sumMix([9, 3, '7', '3']));

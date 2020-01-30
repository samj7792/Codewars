// const createPhoneNumber = arr => {
//   arr.unshift('(');
//   arr.splice(4, 0, ') ');
//   arr.splice(8, 0, '-');
//   return arr.join('');
// };

function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1]));

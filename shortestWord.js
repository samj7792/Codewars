// const findShort = s => {
//   const arr = s.split(' ');
//   let shortest = arr[0];
//   arr.map(word => word.length < shortest.length && (shortest = word));
//   return word.length;
// };

const findShort = s => Math.min(...s.split(' ').map(word => word.length));

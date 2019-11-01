// return the lone even or odd integer

const findOutlier = arr => {
  const vals = arr.map(x => Math.abs((x = x % 2)));
  let even = vals.indexOf(0);
  let odd = vals.indexOf(1);
  if (vals.reduce((sum, x) => (sum += x), 0) == 1) {
    return arr[odd];
  } else return arr[even];
};

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// other answer

function findOutlier(int) {
  var even = int.filter(a => a % 2 == 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

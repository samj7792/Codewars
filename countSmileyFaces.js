// Given an array as an argument return the total number of smiling faces.

const countSmileys = arr => {
  console.log(arr[3][0]);
  console.log(arr[3][arr[3].length - 1]);

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i][0] !== ':' || arr[i][0] !== ';') &&
      (arr[i][arr[i].length - 1] !== ')' || arr[i][arr[i].length - 1] !== 'D')
    ) {
    } else {
      count++;
    }
  }
  return count;
};

console.log(countSmileys([':)', ';(', ';}', ':-D']));

// Write a method that takes an array of consecutive letters as input and that returns the missing letter in the array.

const findMissingLetter = arr => {
  const alphArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphArrUp = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  for (let i = 1; i < arr.length; i++) {
    console.log(alphArr.indexOf(arr[i]));
    console.log(alphArrUp.indexOf(arr[i]));
    if (
      alphArr.indexOf(arr[i]) != alphArr.indexOf(arr[i - 1]) + 1 &&
      alphArr.indexOf(arr[i]) !== -1
    ) {
      return alphArr[alphArr.indexOf(arr[i]) - 1];
    } else if (
      alphArrUp.indexOf(arr[i]) != alphArrUp.indexOf(arr[i - 1]) + 1 &&
      alphArr.indexOf(arr[i]) !== -1
    ) {
      return alphArrUp[alphArrUp.indexOf(arr[i]) - 1];
    }
  }
};

// Smart person answer

function findMissingLetter(array) {
  var i = array[0].charCodeAt();
  array.map(x => (x.charCodeAt() == i ? i++ : i));
  return String.fromCharCode(i);
}

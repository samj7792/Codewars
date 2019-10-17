// write a function that takes a string input and returns the first character that is not repeated anywhere in the string.

const firstNonRepeatingLetter = str => {
  const arr = str.toLowerCase().split('');
  console.log(arr);

  if (arr.length == 0) {
    return '';
  }

  const letterCount = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
        console.log(`i: ${arr[i]} j: ${arr[j]} count: ${count}`);
      }
    }
    if (count == 1) {
      console.log(`answer: ${str[i]}`);
    }
    letterCount.push(count);
    console.log(letterCount);
  }
  if (letterCount.indexOf(1) == Number) {
    return str[letterCount.indexOf(1)];
  } else {
    return '';
  }
};

firstNonRepeatingLetter('moonmen');

const getPINs = observed => {
  let near = [
    ['8', '0'],
    ['1', '2', '4'],
    ['1', '2', '3', '5'],
    ['2', '3', '6'],
    ['1', '4', '5', '7'],
    ['2', '4', '5', '6', '8'],
    ['3', '5', '6', '9'],
    ['4', '7', '8'],
    ['5', '7', '8', '9', '0'],
    ['6', '8', '9']
  ];
  let obsArr = observed.toString().split('');
  console.log(obsArr);

  let poss = [];
  for (let i = 0; i < obsArr.length; i++) {
    poss.push(near[obsArr[i]]);
  }
  console.log(poss);

  let lengths = [];
  for (let i = 0; i < poss.length; i++) {
    lengths.push(poss[i].length);
  }
  console.log(lengths);

  // number of possible pins
  let numPins = 1;
  for (let i = 0; i < lengths.length; i++) {
    numPins *= lengths[i];
  }
  console.log(numPins);

  let res = [];
  for (let i = 0; i < numPins; i++) {
    res.push();
  }
};

getPINs(123);
// 11,12,13,15,21,22,23,25,41,42,43,45

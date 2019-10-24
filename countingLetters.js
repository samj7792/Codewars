const letterCounter = (m, n) => {
  const expandedForm = n =>
    n
      .toString()
      .split('')
      .reverse()
      .map((a, i) => a * Math.pow(10, i))
      .filter(a => a > 0)
      .reverse();

  const upToNineteen = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thrity',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  const hundreds = [
    '',
    'onehundred',
    'twohundred',
    'threehundred',
    'fourhundred',
    'fivehundred',
    'sixhundred',
    'sevenhundred',
    'eighthundred',
    'ninehundred'
  ];
  const thousands = [
    '',
    'onethousand',
    'twothousand',
    'threethousand',
    'fourthousand',
    'fivethousand',
    'sixthousand',
    'seventhousand',
    'eightthousand',
    'ninethousand'
  ];

  let numbers = [];
  for (let i = m; i <= n; i++) {
    if (i < 20) {
      numbers.push([i]);
    } else {
      numbers.push(expandedForm(i));
    }
  }
  console.log(numbers);
};

letterCounter(118, 124);

const letterCounter = (m, n) => {
  console.log(m);
  console.log(n);
  const expandedForm = x =>
    x
      .toString()
      .split('')
      .reverse()
      .map((a, i) => a * Math.pow(10, i))
      .filter(a => a > 0)
      .reverse();

  let test = 0;
  if (m > n) {
    test = m;
    m = n;
    n = test;
  }

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
    'forty',
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
    'ninethousand',
    'tenthousand',
    'eleventhousand',
    'twelvethousand',
    'thirteenthousand',
    'fourteenthousand',
    'fifteenthousand',
    'sixteenthousand',
    'seventeenthousand',
    'eighteenthousand',
    'nineteenthousand'
  ];
  const tenThousands = [
    '',
    '',
    'twentythousand',
    'thirtythousand',
    'fortythousand',
    'fiftythousand',
    'sixtythousand',
    'seventythousand',
    'eightythousand',
    'ninetythousand'
  ];
  const hundredThousands = [
    '',
    'onehundredthousand',
    'twohundredthousand',
    'threehundredthousand',
    'fourhundredthousand',
    'fivehundredthousand',
    'sixhundredthousand',
    'sevenhundredthousand',
    'eighthundredthousand',
    'ninehundredthousand'
  ];

  let numbers = [];
  for (let i = m; i <= n; i++) {
    if (i < 20) {
      numbers.push([i]);
    } else {
      numbers.push(expandedForm(i));
    }

    let length = numbers.length;
    const lastTwo =
      numbers[length - 1][numbers[length - 1].length - 1] +
      numbers[length - 1][numbers[length - 1].length - 2];
    if (numbers[length - 1].length > 1 && lastTwo < 20) {
      let cleaned = numbers[length - 1]
        .slice(0, numbers[length - 1].length - 2)
        .concat(lastTwo);
      numbers[length - 1] = cleaned;
    }

    for (let j = 0; j < numbers[length - 1].length; j++) {
      let numberJ = numbers[length - 1][j];

      let teenThou = numberJ + numbers[length - 1][j + 1];
      console.log(teenThou);
      if (teenThou > 10999 && teenThou < 19001) {
        console.log(numbers[length - 1]);
        console.log(numbers[length - 1].slice(0, j));
      }

      if (numberJ < 20) {
        numbers[length - 1][j] = upToNineteen[numberJ];
      } else if (numberJ > 19 && numberJ < 91) {
        numbers[length - 1][j] = tens[numberJ / 10];
      } else if (numberJ > 99 && numberJ < 901) {
        numbers[length - 1][j] = hundreds[numberJ / 100];
      } else if (numberJ > 999 && numberJ < 19001) {
        numbers[length - 1][j] = thousands[numberJ / 1000];
      } else if (numberJ > 19999 && numberJ < 90001) {
        numbers[length - 1][j] = tenThousands[numberJ / 1000];
      } else if (numberJ > 99999 && numberJ < 900001) {
        numbers[length - 1][j] = hundredThousands[numberJ / 1000];
      }
    }
    numbers[length - 1] = numbers[length - 1].join('');
  }
  numbers = numbers.join('');
  console.log(numbers);
  return numbers.length;
};

console.log(letterCounter(110999, 111001));

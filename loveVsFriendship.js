// a=1, b=2 ... z=26

const wordsToMarks = string => {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  let sum = 0;
  string.split('').forEach(x => (sum += alph.indexOf(x) + 1));
  return sum;
};

console.log(wordsToMarks('love'));

// other answer

const wordsToMarks = s =>
  [...s].map((a, i) => s.charCodeAt(i) - 96).reduce((a, b) => a + b);

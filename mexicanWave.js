// wave('hello') = ['Hello', 'hEllo', 'heLlo', 'helLo', hellO']

const wave = str => {
  const mex = [];
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/gi.test(str[i])) {
      str = str.split('');
      str[i] = str[i].toUpperCase();
      str = str.join('');
      mex.push(str);
      str = str.split('');
      str[i] = str[i].toLowerCase();
      str = str.join('');
    }
  }
  return mex;
};

console.log(wave('two words'));

// other solution

var wave = w =>
  [...w]
    .map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1))
    .filter(a => a != w);

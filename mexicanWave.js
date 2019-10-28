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

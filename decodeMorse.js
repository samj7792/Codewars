decodeMorse = function(morseCode) {
  console.log(morseCode);
  const splitWords = morseCode.split('   ');
  console.log(splitWords);
  const splitLetters = splitWords.map(x => (x = x.split(' ')));
  console.log(splitLetters);
  let decode = splitLetters
    .map(x => x.map(y => MORSE_CODE[y]).join(''))
    .join(' ');
  console.log(decode);
  while (decode[0] === ' ') {
    decode = decode.split('');
    decode.shift();
    decode = decode.join('');
    console.log(decode);
  }
  return decode;
};

const decodeMorse = morseCode =>
  morseCode
    .trim()
    .split(/  | /)
    .map(code => MORSE_CODE[code] || ' ')
    .join('');

const squareDigits = num =>
  parseInt(
    num
      .toString()
      .split('')
      .map(x => Math.pow(parseInt(x), 2))
      .join('')
  );

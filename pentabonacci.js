const countOddPentaFib = num => {
  let fibs = [0, 1, 1, 2, 4];

  for (let i = fibs.length - 1; i < num; i++) {
    fibs.push(fibs[i] + fibs[i - 1] + fibs[i - 2] + fibs[i - 3] + fibs[i - 4]);
  }
  console.log(fibs.length);
  fibs = [...new Set(fibs.filter(x => x % 2))];
  console.log(fibs.length);
  return fibs.length;
};

console.log(countOddPentaFib(121));

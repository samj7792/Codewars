const multiply = (m, n) => {
  if (m.length < n.length) {
    let test = '';
    test = m;
    m = n;
    n = test;
  }
  m = m.split('').reverse();
  n = n.split('').reverse();
  totals = [];
  n.forEach(x => {
    m.forEach(y => {
      if (parseInt(x) * parseInt(y) < 10) {
        totals.push(parseInt(x) * parseInt(y));
      }
    });
  });
  console.log(totals);
};

console.log(multiply('1234', '123'));

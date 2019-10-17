const LCM = A => {
  // A is an integer array (e.g. [-50,25,-45,-18,90,447])
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    console.log(`Loop ${i}: a: ${a} b: ${b} c: ${c}`);
    while (a && b) {
      console.log(`Loop ${i}: early a: ${a} b: ${b}`);
      console.log(`Loop ${i}: a > b ? (a %= b) : (b %= a)`);
      a > b ? (a %= b) : (b %= a);
      console.log(`Loop ${i}: late a: ${a} late b: ${b}`);
    }
    console.log(
      `Loop ${i}: (c * A[i]) / (a + b) = a = ${(c * A[i]) / (a + b)}`
    );
    a = Math.abs(c * A[i]) / (a + b);
  }
  console.log(`final a: ${a}`);
  return a;
};
const convertFrac = lst => {
  console.log(lst);
  let length = lst.length;
  console.log('length ' + length);
  let denoms = [];
  lst.forEach(elm => denoms.push(elm[1]));
  let lcm = LCM(denoms);
  console.log('lcm ' + lcm);
  let numers = [];
  lst.forEach(elm => numers.push(elm[0]));
  console.log('numerators ' + numers);
  denoms = [];
  lst.forEach(elm => denoms.push(elm[1]));
  console.log('denominators ' + denoms);
  let newNumers = [];
  for (let i = 0; i < length; i++) {
    let mult = lcm / denoms[i];
    console.log(`${mult} = ${lcm} / ${denoms[i]}`);
    newNumers.push(mult * numers[i]);
  }
  console.log(newNumers);
  let res = '';
  for (let i = 0; i < length; i++) {
    let frac = '';
    frac += newNumers[i].toString().concat(',', lcm.toString());
    res += `(${frac})`;
  }
  console.log(res);
  return res;
};

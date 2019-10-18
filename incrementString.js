// write a function which increments a string, to create a new string

const incrementString = str => {
  let string = str;
  const num = [];
  while (/\d\b/g.test(string)) {
    num.push(string[string.length - 1]);
    string = string.slice(0, string.length - 1);
  }
  let newNum = num.reverse().join('');
  newNum++;
  newNum = newNum.toString().split('');
  if (newNum.length < num.length) {
    while (newNum.length < num.length) {
      newNum.unshift('0');
    }
    return `${string}${newNum.join('')}`;
  }
  string = `${string}${newNum.join('')}`;
  return string;
};

console.log(incrementString('foo0009'));

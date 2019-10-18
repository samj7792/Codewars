// format a list of names separating by commas and the final name by an ampersand

const list = names => {
  console.log(names);
  let arr = [];
  names.forEach(x => arr.push(x.name));
  console.log(arr);
  if (!arr.length) {
    return '';
  } else if (arr.length == 1) {
    return arr[0];
  } else {
    let last = arr.pop();
    return `${arr.join(', ')} & ${last}`;
  }
};

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));

// Fancy answer

var list = names =>
  names
    .map(x => x.name)
    .join(', ')
    .replace(/(.*),(.*)$/, '$1 &$2');

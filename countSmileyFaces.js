// Given an array as an argument return the total number of smiling faces.

const countSmileys = arr => {
  let count = 0;
  arr.forEach(x => {
    if (x.length == 2) {
      if (/(:|;)/g.test(x[0]) && /(D|\))/g.test(x[1])) {
        count++;
      }
    } else if (x.length == 3) {
      if (/(:|;)/g.test(x[0]) && /(-|~)/g.test(x[1]) && /(D|\))/g.test(x[2])) {
        count++;
      }
    }
  });
  return count;
};

console.log(countSmileys([':)', ';(', ';}', ':-D']));

// Fancy answer

const countSmileys2 = arr => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;

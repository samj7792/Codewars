// create all permutations of an input string and remove duplicates, if present. i.e. shuffle all letters from the input in all possible orders.

function permutations(string) {
  let results = [];

  if (string.length === 1) {
    results.push(string);
    console.log(`if results: ${results}`);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    console.log('outer');
    const firstChar = string[i];
    console.log(`firstChar: ${firstChar}`);
    let charsLeft = string.substring(0, i) + string.substring(i + 1);
    console.log(`charsLeft: ${charsLeft}`);
    let innerPermutations = permutations(charsLeft);
    console.log(`innerPermutations: ${innerPermutations}`);
    for (let j = 0; j < innerPermutations.length; j++) {
      console.log('inner');
      results.push(firstChar + innerPermutations[j]);
      console.log(`inner result: ${results}`);
    }
  }
  console.log(`End results: ${results}`);
  return [...new Set(results)];
}

console.log(permutations('abc'));

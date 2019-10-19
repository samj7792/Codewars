const nextBigger = num => {
  // to implement this permutator uncomment .map, and split numArr
  //   const permutator = inputArr => {
  //     let result = [];

  //     const permute = (arr, m = []) => {
  //       if (arr.length === 0) {
  //         result.push(m);
  //       } else {
  //         for (let i = 0; i < arr.length; i++) {
  //           let curr = arr.slice();
  //           let next = curr.splice(i, 1);
  //           permute(curr.slice(), m.concat(next));
  //         }
  //       }
  //     };

  //     permute(inputArr);

  //     return result;
  //   };

  function permutations(string) {
    let results = [];

    if (string.length === 1) {
      results.push(string);
      return results;
    }

    for (let i = 0; i < string.length; i++) {
      const firstChar = string[i];
      let charsLeft = string.substring(0, i) + string.substring(i + 1);
      let innerPermutations = permutations(charsLeft);
      for (let j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return [...new Set(results)];
  }

  let numArr = num.toString();
  console.log(numArr);

  let permutes = Math.min(
    permutations(numArr)
      // .map(x => x.join(''))
      .filter(x => x > num)
      .sort()
  );
  console.log(permutes);
  return parseInt(permutes);
};

console.log(nextBigger(123456789));

// given an array of integers, return the indices of the two numbers such that they add up to a specific target

const twoSum = (nums, target) => {
  let sol = [];
  nums.map((num, i) => {
    for (let j = i + 1; j < nums.length; ++j) {
      if (num + nums[j] == target) {
        console.log(num);
        sol = [i, j];
      }
    }
  });
  return sol;
};

console.log(twoSum([3, 3], 6));

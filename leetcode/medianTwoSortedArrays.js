var findMedianSortedArrays = function(nums1, nums2) {
  let full = nums1.concat(nums2).sort((a, b) => a - b);
  console.log(full);
  if (full.length % 2 == 1) {
    return full[Math.floor(full.length / 2)];
  } else {
    return (full[full.length / 2] + full[full.length / 2 - 1]) / 2;
  }
};

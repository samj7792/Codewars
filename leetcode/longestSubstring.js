const lengthOfLongestSubstring = s => {
  s = s.split('');
  let test = [];
  let longest = 0;
  for (let i = 0; i < s.length; ++i) {
    if (test.indexOf(s[i]) == -1) {
      test.push(s[i]);
      if (test.length > longest) {
        longest = test.length;
      }
    } else {
      if (test.length > longest) {
        longest = test.length;
      }
      while (test.indexOf(s[i]) !== -1) {
        test.shift();
      }
      test.push(s[i]);
      console.log(test);
    }
  }
  return longest;
};

console.log(
  lengthOfLongestSubstring('mjdkdnvnvklifhfkworythgscadqtsezcvebfnbmukipiljk')
);

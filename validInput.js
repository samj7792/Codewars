// Validate if a user input string is alphanumeric

const alphanumeric = str => {
  if (/[^a-zA-Z0-9]/g.test(str) || str === '') {
    return false;
  }
  return true;
};

console.log(alphanumeric(''));

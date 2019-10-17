// Accept a number of cents, compute and print how to represent that amount with the smallest number of coins.

const genterateCoinChange = cents => {
  let remainder = cents;
  const coins = [100, 50, 25, 10, 5];
  const change = [];
  coins.forEach(elem => {
    change.push(Math.floor(remainder / elem));
    remainder %= elem;
  });

  return `Dollar Coins: ${change[0]} \nHalf Dollars: ${change[1]} \nQuarters: ${
    change[2]
  } \nDimes: ${change[3]} \nNickles: ${change[4]} \nPennies: ${remainder}`;
};

console.log(genterateCoinChange(99));

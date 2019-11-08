const calcFuel = n => {
  const fuels = [800, 120, 80, 15, 1];
  let timeRem = n * 11;
  let amount = [];
  fuels.forEach(fuel => {
    amount.push(Math.floor(timeRem / fuel));
    timeRem %= fuel;
  });
  console.log(amount);
  return {
    lava: amount[0],
    blazeRod: amount[1],
    coal: amount[2],
    wood: amount[3],
    stick: amount[4]
  };
};

console.log(calcFuel(64));

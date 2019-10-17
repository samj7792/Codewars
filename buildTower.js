// Build a Tower by the following given argument: number of floors(integer and always greater than 0).
// Each consecutive floor has 2 more stars than the previous

const towerBuilder = nFloors => {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(
      new Array(2 * nFloors - 1)
        .fill(' ')
        .fill('*', nFloors - i - 1, nFloors + i)
        .join('')
    );
  }
  return tower;
};

console.log(towerBuilder(6));

const warnTheSheep = queue => {
  console.log(queue.indexOf('wolf'));
  const place = queue.indexOf('wolf');

  if (place == queue.length - 1) {
    return 'Pls go away and stop eating my sheep';
  } else {
    return `Oi! Sheep number ${queue.length -
      1 -
      place}! You are about to be eaten by a wolf!`;
  }
};

const warnTheSheep = queue =>
  queue.indexOf('wolf') == queue.length - 1
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${queue.length -
        1 -
        queue.indexOf('wolf')}! You are about to be eaten by a wolf!`;

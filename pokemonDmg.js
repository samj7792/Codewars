const calculateDamage = (yourType, opponentType, attack, defense) => {
  let eff = 1;
  if (
    (yourType === 'fire' && opponentType === 'grass') ||
    (yourType === 'water' && opponentType === 'fire') ||
    (yourType === 'grass' && opponentType === 'water') ||
    (yourType === 'electric' && opponentType === 'water')
  ) {
    eff = 2;
  } else if (
    yourType === opponentType ||
    (yourType === 'grass' && opponentType === 'fire') ||
    (yourType === 'water' && opponentType === 'electric') ||
    (yourType === 'water' && opponentType === 'grass') ||
    (yourType === 'fire' && opponentType === 'water')
  ) {
    eff = 0.5;
  } else eff = 1;
  return 50 * (attack / defense) * eff;
};

// from codewars

const calculateDamage = (yourType, opponentType, attack, defense) => {
  const effectivenessMap = {
    fire: { fire: 0.5, grass: 2, water: 0.5, electric: 1 },
    grass: { fire: 0.5, grass: 0.5, water: 2, electric: 1 },
    water: { fire: 2, grass: 0.5, water: 0.5, electric: 0.5 },
    electric: { fire: 1, grass: 1, water: 2, electric: 0.5 }
  };

  return Math.ceil(
    50 * (attack / defense) * effectivenessMap[yourType][opponentType]
  );
};

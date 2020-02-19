const maxBall = v0 => {
  let v = (v0 * 1000) / 3600;
  let h = 0;
  let g = 9.81;
  const heights = [];
  for (let t = 0; h > -0.1; t += 0.1) {
    h = v * t - 0.5 * g * t * t;
    heights.push(h);
  }
  const max = Math.max(...heights);
  const index = heights.indexOf(max);
  return index;
};

// from codewars

const maxBall = v => Math.round(v / 3.5316);

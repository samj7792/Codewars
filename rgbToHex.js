const rgb = (r, g, b) =>
  [r, g, b]
    .map(x => (x <= 0 ? (x = '00') : x > 255 ? (x = 255) : x))
    .map(x => x.toString(16).toUpperCase())
    .join('');

console.log(rgb(-20, 0, 300));

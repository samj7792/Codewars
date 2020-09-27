const fullMoon = "o";
const halfMoon = "c";
const newMoon = "x";

const moonRating = (num) => {
  console.log(fullMoon.repeat(num / 2));
  console.log(halfMoon.repeat(Math.round(num) % 2));
  console.log(newMoon.repeat((10 - Math.ceil(num)) / 2));
  return (
    "o".repeat(Math.round(num) / 2) +
    "c".repeat(Math.round(num) % 2) +
    "x".repeat((10 - Math.ceil(num)) / 2)
  );
};

console.log(moonRating(6.1));

// ^^^ not working on even numbers with decimal below .5

moonRating = (x) =>
  ("o".repeat((x += 0.5) >> 1) + ["c"[~x & 1]]).padEnd(5, "x");

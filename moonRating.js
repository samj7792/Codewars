const fullMoon = "o";
const halfMoon = "c";
const newMoon = "x";

const moonRating = (num) => {
  // const full = full = Math.floor(num);
  // const half = Math.ceil((num % 1) / 5) * 5;
  // const neww = Math.floor(10 - num);
  const rating = [
    (full = Math.floor(num)),
    (half = Math.ceil((num % 1) / 5) * 5),
    (neww = Math.floor(10 - num)),
  ];
  console.log(rating);

  const string = [];
  rating.map((x, j) => {
    if (j == 0) {
      for (let i = 0; i < x; i + )
    }



    for (let i = 0; i < x; i++) {
      if (j == 0) {
        string.push("o");
      } else if (j == 1) {
        string.push("c");
      } else {
        string.push("x");
      }
    }
  });
  console.log(string);
};

console.log(moonRating(7.2));

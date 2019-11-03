function bloodMoon(r) {
  return ((r * r) / 2) * Math.PI - (((r * r) / 2) * Math.PI) / 2 - r * r;
}

console.log(bloodMoon(1));

function between(x, min, max) {
  return x >= min && x <= max;
}
function getSoloHours(distance) {
  if (between(distance, 0, 450)) {
    return 9;
  }
  if (between(distance, 451, 500)) {
    return 10;
  }
}

module.exports = getSoloHours;

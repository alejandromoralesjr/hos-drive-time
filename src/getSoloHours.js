function getSoloHours(distance) {
  const base = 31 / 1000;
  return distance * base;
}

module.exports = getSoloHours;

function getSoloHours(distance) {
  const base = distance * (31 / 1000);
  const perDay = Math.round(distance / 550);
  return perDay;
}

module.exports = getSoloHours;

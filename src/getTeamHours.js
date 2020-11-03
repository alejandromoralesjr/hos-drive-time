function getTeamHours(distance) {
  const base = 21 / 1000;
  return Math.ceil(distance * base);
}

module.exports = getTeamHours;

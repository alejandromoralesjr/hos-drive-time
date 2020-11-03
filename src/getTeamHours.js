function getTeamHours(distance) {
  const base = 21 / 1000;
  return distance * base;
}

module.exports = getTeamHours;

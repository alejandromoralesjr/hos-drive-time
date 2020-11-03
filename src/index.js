const getTeamHours = require("./getTeamHours");
const getSoloHours = require("./getSoloHours");

const hours = 3000;
const teamHours = getTeamHours(hours);
const soloHours = getSoloHours(hours);
console.log("> TEAM: ", teamHours);
console.log("> SOLO: ", soloHours);
module.exports = {
  getTeamHours,
  getSoloHours,
};

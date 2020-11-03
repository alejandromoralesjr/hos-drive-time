const getTeamHours = require("./getTeamHours");
const getSoloHours = require("./getSoloHours");

const miles = 600;
const teamHours = getTeamHours(miles);
const soloHours = getSoloHours(miles);

console.log("BASED ON ", miles, " MILES");
console.log("> TEAM: ", teamHours);
console.log("> SOLO: ", soloHours);
module.exports = {
  getTeamHours,
  getSoloHours,
};

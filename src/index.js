const getTeamHours = require("./getTeamHours");
const getSoloHours = require("./getSoloHours");

const mileChecker = [500, 1000, 1500, 2000];

mileChecker.forEach((mile) => {
  console.log("----");
  console.log("BASED ON ", mile, " MILES");
  console.log(">> TEAM: ", getTeamHours(mile));
  console.log("> SOLO: ", getSoloHours(mile));
});

module.exports = {
  getTeamHours,
  getSoloHours,
};

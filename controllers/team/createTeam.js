const Team = require("../../Models/team");
let success = false;

const createTeam = async (req, res) => {
  const { name } = req.body;

  // Checking if the team is already exists or not
  const teamCheck = await Team.findOne({ name });

  if (teamCheck) {
    success = false;
    return res.status(400).json({ err: "Team is already exists" });
  } else {
    success = true;
    await Team.create({
      name: name,
    });
  }

  res.json({ msg: "The team has been created", success });
};
module.exports = { createTeam };

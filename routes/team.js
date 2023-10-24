const express = require("express");
const router = express.Router();
const { createTeam } = require("../controllers/team/createTeam");
const { addPlayer } = require("../controllers/team/addPlayer");

//Api - 1:- To create a new
router.post("/createTeam", createTeam);

// Api - 2:- To add the player to the team.
router.post("/addPlayer", addPlayer);
module.exports = router;

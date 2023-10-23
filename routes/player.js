const express = require("express");
const router = express.Router();
const { createplayer } = require("../controllers/player/createplayer");
const { login } = require("../controllers/player/login");
const { forgotPassword } = require("../controllers/player/forgotPassword");
const fetchuser = require("../middleware/fetchuserwithtoken");

//Api -1 for sign up a player
router.post("/create", createplayer);
//Api-2 for sign in a user
router.post("/login", login);
//Api-3 for forgot a password
router.put("/forgotpassword", forgotPassword);

module.exports = router;

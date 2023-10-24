const express = require("express");
const router = express.Router();
const { createplayer } = require("../controllers/player/createplayer");
const { login } = require("../controllers/player/login");
const { forgotPassword } = require("../controllers/player/forgotPassword");
const {
  verifyDetails,
} = require("../controllers/player/checkcredentialsforforgotpassword");
const fetchuser = require("../middleware/fetchuserwithtoken");

//Api -1 for sign up a player
router.post("/create", createplayer);

//Api-2 for sign in a user
router.post("/login", login);

//Api-3 for check credetial to change a password
router.put("/forgotpassword/:id", forgotPassword);

//Api-4 to change for a new password
router.put("/verifyDetails", verifyDetails);

module.exports = router;

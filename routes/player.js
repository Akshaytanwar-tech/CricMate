const express = require("express");
const router = express.Router();
const { createplayer } = require("../controllers/player/createplayer");
const { login } = require("../controllers/player/login");
const fetchuser = require("../middleware/fetchuserwithtoken");
router.post("/create", createplayer);
router.post("/login", login);

module.exports = router;

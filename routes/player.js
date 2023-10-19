const express = require("express");
const router = express.Router();
const {createplayer} = require("../controllers/player/createplayer");

router.get("/create", createplayer);

module.exports = router;

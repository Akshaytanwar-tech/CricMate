const Player = require("../../Models/player");
require("dotenv").config();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const createplayer = async (req, res) => {
  try {
    const saltRounds = 10;
    const { name, email, password, address, Mobile, Role, DOB } = req.body;
    // Checking user is already exists or not
    const isUser = await Player.findOne({ email: req.body.email });

    if (isUser) {
      res.json("user is already found");
      return;
    }
    //Making salt and hash of the password
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(password, salt);
    // Saving data to the database
    const user = await Player.create({
      name: name,
      email: email,
      password: hash,
      address: address,
      Mobile: Mobile,
      Role: Role,
      DOB: DOB,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    // generating token to user
    var token = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createplayer };

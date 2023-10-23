// ------------------------- Api function for the Login of a player ------------------------------------ //

const Player = require("../../Models/player");
const bcrypt = require("bcrypt");
require("dotenv").config();
var jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    
    let success = false;
    const { email, password } = req.body;

    //Checking email is exists or not
    const user = await Player.findOne({ email: email });

    // If email is not found
    if (!user) {
      success = false;
      return res.status(400).json({ err: "Email is Not found", success });
    }

    // Comparing the user password and hash of particular email
    const isPassword = await bcrypt.compareSync(password, user.password);

    // If the password doesn't match with the hased password
    if (!isPassword) {
      success = false;
      return res.status(400).json({ err: "Wrong Password", success });
    }
    success = true;

    const data = {
      user: {
        id: user.id,
      },
    };
    // generating token to user
    var token = await jwt.sign(data, process.env.JWT_SECRET);
    if (token) {
      res.json({ token, success });
    }
  } catch (error) {
    success = false;
    return res.status(400).json({ err: error, success });
  }
};
module.exports = { login };

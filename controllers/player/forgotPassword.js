//----------------------Api to forgot the user password -------------------------//

const Player = require("../../Models/player");
const bcrypt = require("bcrypt");
let success = false;

// forgot password
const forgotPassword = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    if (newPassword != confirmPassword) {
      success = false;
      return res
        .status(400)
        .json({ err: "Both password should be same", success });
    }

    const saltRounds = 10;

    //Making salt and hash of the password.
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(newPassword, salt);

    //Updating the hash to the database.
    const Updateduser = await Player.findByIdAndUpdate(req.params.id, {
      password: hash,
    });

    success = true;
    res.json({ Updateduser, success });
  } catch (error) {
    success = false;
    console.log(error);
    res.status(400).json({ err: "Internal error", success });
  }
};

module.exports = { forgotPassword };

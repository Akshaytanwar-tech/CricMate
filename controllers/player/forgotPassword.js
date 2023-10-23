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
    if (newPassword == confirmPassword) {
      const saltRounds = 10;
      const salt = await bcrypt.genSaltSync(saltRounds);
      const hash = await bcrypt.hashSync(newPassword, salt);
      console.log(hash);

      const Updateduser = await Player.findByIdAndUpdate(user._id, {
        password: hash,
      });
      console.log(user);
    }
  } catch (error) {

  }
};

// to very details to forgot  the password
const verifyDetails = async (req, res) => {
  try {
    const { email, Mobile } = req.body;

    // Finding the user details from the email
    const user = await Player.findOne({ email });
    console.log(user.password);
    if (!user) {
      success = false;
      return res.status(400).json({ err: "User not found", success });
    }

    // Checking the Mobile number is matching or not
    if (email != user.email || Mobile != user.Mobile) {
      success = false;
      return res
        .status(400)
        .json({ err: "Mobile is not matched with email", success });
    }

    if (email == user.email && Mobile == user.Mobile) {
      success = true;
      res.json(success);
    }
  } catch (error) {
    success = false;
    console.log(error);
    return res.status(400).json({ err: "Internal error", success });
  }
};

module.exports = { forgotPassword, verifyDetails };

// ------------------------------------- Api to check crediantial for forgot password-------------------------------- // 

const Player = require("../../Models/player");
let success = false;


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

  module.exports = {  verifyDetails };
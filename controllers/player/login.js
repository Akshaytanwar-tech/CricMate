const Player = require("../../Models/player");

const login = (req, res) => {
  const { email, password } = req.body;

  //Checking email is exists or not
  const isEmail = Player.find({ email: email });

  if (!isEmail) {
    return res.send("email is not found");
  }
  console.log(isEmail.id)
  // bcrypt.compareSync(password, hash);
};
module.exports = { login };

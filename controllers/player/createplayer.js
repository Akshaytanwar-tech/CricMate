const Player = require("../../Models/player");

const createplayer = async (req, res) => {
  try {
    const { name, email, password, address, Mobile, Role, DOB } = req.body;

    const user = await Player.create({
      name: name,
      email: email,
      password: password,
      address: address,
      Mobile: Mobile,
      Role: Role,
      DOB: DOB,
    });
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createplayer };

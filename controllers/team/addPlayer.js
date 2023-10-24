const Team = require("../../Models/team");
const Player = require("../../Models/player");

const addPlayer = async (req, res) => {
  let success;
  const { Mobile } = req.body;

  // Is player is exists or not

  const player = await Player.findOne({ Mobile });

  if (!player) {
    return res
      .status(400)
      .json({ err: "Player is not exists Sign up first", success });
  }

  const updatePlayer = await Team.findByIdAndUpdate(player._id, {
    $push: {
      players: [
        {
          id: player._id,
          name: player.name,
        },
      ],
    },
  });

  res.json({ updatePlayer });
};

module.exports = { addPlayer };

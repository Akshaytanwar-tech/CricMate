const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  players: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
      name: {
        type: String,
      },
    },
  ],
  Mobile: {
    type: Number,
  },
});
const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;

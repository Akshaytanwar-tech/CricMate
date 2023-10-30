const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  Role: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
});
const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;

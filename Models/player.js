import mongoose from "mongoose";
const { Schema } = mongoose;

const PlayerSchema = new Schema({
  name: {
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
  },
  Role: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
});
const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;

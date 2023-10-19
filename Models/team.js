import mongoose from "mongoose";
const { Schema } = mongoose;

const TeamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;

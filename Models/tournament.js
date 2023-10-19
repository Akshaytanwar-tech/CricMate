import mongoose from "mongoose";
const { Schema } = mongoose;

const TournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
 
});
const Tournament = mongoose.model("Tournament", TournamentSchema);
module.exports = Tournament;

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CompetitionSchema = new Schema({
  title: {
    type: String,
    required: [true, "Email is required"]
  },
  video: {
    type: String,
  },
  wod: {
    type: Number,
    required: [true, "Password is required"]
  }
});




const Competition = mongoose.model('Competition', CompetitionSchema);
module.exports = Competition;
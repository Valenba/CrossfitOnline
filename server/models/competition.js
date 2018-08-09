const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TagVideo = require("./tagVideo")

const CompetitionSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  wod:[{
  video: {
    type: String,
  },
  wodNumber: {
    type: Number,
    required: [true, "Wod is required"]
  }
  }],
  exercises:[{
   type: Schema.Types.ObjectId,ref: "TagVideo"   
  }]
});




const Competition = mongoose.model('Competition', CompetitionSchema);
module.exports = Competition;
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TagVideoSchema = new Schema({
  exercise: {
    type: String
  },
  url: {
      type: String
  }
});

const TagVideo = mongoose.model('TagVideo', TagVideoSchema);
module.exports = TagVideo;
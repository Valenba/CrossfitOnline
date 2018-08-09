require('dotenv').config();

const mongoose = require('mongoose');
const Exercise = require('../models/tagVideo');

const dbVideo = process.env.DBURL;
mongoose.connect(dbVideo);

const exercises = [{
         exercise: `Snatch`,
         url: `https://www.youtube.com/embed/UBc5N_-xdqo`         
     },
     {
        exercise: `Squat`,
        url: `https://www.youtube.com/embed/9xQp2sldyts`   
    },
     {
        exercise: `Toes to Bar`,
        url: `https://www.youtube.com/embed/_03pCKOv4l4`    
    },     
]

Exercise.collection.drop();


Exercise.create(exercises, (err, data) => {
     if (err) {
          throw (err)
     }

     console.log(`Created ${exercises.length} exercises`);

}).then(() => {
     mongoose.disconnect();
});
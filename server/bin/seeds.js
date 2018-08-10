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
    {
        exercise: `Box Jump`,
        url: `https://www.youtube.com/embed/52r_Ul5k03g`    
    },     
    {
        exercise: `Burpee`,
        url: `https://www.youtube.com/embed/TU8QYVW0gDU`    
    },     
    {
        exercise: `Clean and Jerk`,
        url: `https://www.youtube.com/embed/rwMorlCDtis`    
    },     
    {
        exercise: `C2B`,
        url: `https://www.youtube.com/embed/p9Stan68FYM`    
    },     
    {
        exercise: `Dead Lift`,
        url: `https://www.youtube.com/embed/op9kVnSso6Q`    
    },
    {
        exercise: `DU`,
        url: `https://www.youtube.com/embed/60oEaPKE87g`    
    },     
    {
        exercise: `Front Squat`,
        url: `https://www.youtube.com/embed/m4ytaCJZpl0`    
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
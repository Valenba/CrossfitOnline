const express = require("express");
const router = express.Router();
const Competition = require('../../models/competition');

// Retrive ALL
router.get("/", (req, res, next) => {
  Competition.find()
    .populate("exercises")
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const { title, wod, exer } = req.body;

  const newCompetition = { title, wod };
  newCompetition.exercises = exer;

  newCompetition.wod[0].video = newCompetition.wod[0].video.replace('watch?v=', 'embed/');
  console.log(newCompetition.video);
  console.log(newCompetition);

  Competition.create(newCompetition)
    .then(object => res.json(object))
    .catch(e => console.log(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  Competition.findById(req.params.id)
    .populate("exercises")
    .then(object => {
      console.log(object)
      res.json(object)
    })
    .catch(e => next(e));
});

router.put("/:id", (req, res, next) => {
  const { title, video, wod } = req.body;

  const updates = { title, video, wod };

  Competition.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(object => res.json(object))
    .catch(e => next(e));
});

// Retrive DETAIL
router.delete("/:id", (req, res, next) => {
  Competition.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

module.exports = router;
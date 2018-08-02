const express = require("express");
const router = express.Router();
const Competition = require('../../models/competition');

// Retrive ALL
router.get("/", (req, res, next) => {
  Competition.find()
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const { title, video, wod } = req.body;

  const newCompetition = { title, video, wod };

  console.log(newCompetition)

  Competition.create(newCompetition)
    .then(object => res.json(object))
    .catch(e => console.log(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  Competition.findById(req.params.id)
    .then(object => res.json(object))
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
const express = require("express");
const router = express.Router();
const Video = require("../../models/tagVideo")

router.get("/", (req, res, next) => {
  Video.find()
  .then(objects => res.json(objects))
  .catch(e => next(e));
});

router.get("/:id", (req, res, next) => {
    Video.findById(req.params.id)
      .then(object => {console.log(object)
        res.json(object)})
      .catch(e => next(e));
  });

  module.exports = router;
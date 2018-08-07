const express  = require('express');
const router   = express.Router();
const axios = require("axios");
let name= ""
const crossfitApi = axios.create({
  baseURL: `https://games.crossfit.com/competitions/api/v1/competitions/open/2018/athletes?term=`
})

router.get("/:name", (req, res, next) => {

  name = req.params.name;
crossfitApi.get(name)
.then(objects => {
console.log(objects.data)
res.json(objects.data)})
.catch(e => next(e));
});

module.exports = router;

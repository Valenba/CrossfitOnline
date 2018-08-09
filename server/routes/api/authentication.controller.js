const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const uploadCloud = require('../../config/cloudinary');

  router.post("/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }

      if (!user) { return res.status(401).json(info); }

      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({
            message: 'something went wrong :('
          });
        }
        res.status(200).json(req.user);
      });
    })(req, res, next);
  });

router.post("/signup",uploadCloud.single('file'), (req, res, next) => {
  console.log(req.file)
  if(req.file){
  var photo = req.file.url;
  }else{
    var photo = 'https://infowod.com/wp-content/uploads/2016/05/rich-froning-crossfit-games-infowod-1126x520.jpg';
  }
  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Please provide all fields" });
    ;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      return res
        .status(400)
        .json({ message: "The username already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User({
      username,
      email,
      photo,
      password: hashPass,  
    });

    newUser.save((err) => {
      if (err) {
        res.status(400).json({ message: "Something went wrong" });
      } else {
        req.login(newUser, function (err) {
          if (err) {
            return res.status(500).json({
              message: 'something went wrong'
            });
          }
          return res.status(200).json(req.user);
        });
      }
    });
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.get("/loggedin", function (req, res) {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }

  return res.status(403).json({ message: 'Unauthorized' });
});

// router.get("/", (req, res, next) => {
//   User.findById(req.user._id)
//     .then(object => {
//       console.log(object)
//       res.json(object)
//     })
//     .catch(e => next(e));
// });

module.exports = router;
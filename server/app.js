require('dotenv').config();

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const configure = require("./config/passport.js");
const cors = require("cors");


mongoose.connect(process.env.DBURL);

const app = express();

app.use(
  session({
    secret: "crossfit-app",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 2419200000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

configure(passport);

app.use(passport.initialize());
app.use(passport.session());
var whitelist = ["http://localhost:4200"];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.locals.title = "Express - Generated with IronGenerator";

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(layouts);

const index = require("./routes/index");
app.use("/", index);

const api = require("./routes/api/authentication.controller")
app.use("/api", api)

const competition = require("./routes/api/competition.controller")
app.use("/api/competition", competition)

const information = require("./routes/api/information.controller")
app.use("/api/information", information)

const videoExercise = require("./routes/api/tagVideo.controller")
app.use("/api/tagVideo", videoExercise)

const spotify = require("./routes/api/spotify.controller")
app.use("/api/spotify", spotify)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.log(err.message)
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
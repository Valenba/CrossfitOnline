const express = require("express");
const router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');


//SPOTIFY Recupera toda la información pero spotify se muestra en un iframe en el wod.component.html
var clientId = '6f0df9a96c574f5caacc8534d5a13d70',
    clientSecret = 'f60098bcd96543ad925cbdd27c2ca931';

var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
    .then(function (data) {
        spotifyApi.setAccessToken(data.body['access_token']);
    }, function (err) {
        console.log('Something went wrong when retrieving an access token', err);
    });

// Get a playlist
router.get("/", (req, res, next) => {
    spotifyApi.getPlaylist('raulvalen', '4qjvnc5hTIDTGtyNEq2H06')
        .then(function (data) {
            console.log('Some information about this playlist', data.body);
            res.json(data.body)
        }, function (err) {
            console.log('Something went wrong!', err);
        });
      });
//token:
//BQAy8KrJ5OcyMqvEzCbZHwLtIo4ViCxPkgM9WxGOG1S8kn26eGc3XS-OwB_3IJfgt5O2_Fy5sGMq3aF8U2OtQOHvjffq_n6EqQZOG1Za7E7r8Nem3CljqDbEEqV77a9dBG72cYfAqA6yb8yjZz-PuDaDCQ
//playlist _id <iframe src="https://open.spotify.com/embed/user/raulvalen/playlist/4qjvnc5hTIDTGtyNEq2H06" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>


module.exports = router;
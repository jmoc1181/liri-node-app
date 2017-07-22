//console.log('this is loaded');

var Twitter = require('twitter');

//twitter keys 
exports.twitterKeys =  Twitter ({
  consumer_key: 'rzsdmv5mcnHNq7bS3rmfvqXiS',
  consumer_secret: 'hHmIsU4HVsMVJxfQ3TvG3NXzsdo89Pm5QScAfVhSf6uJPh5vMr',
  access_token_key: '885319729774297092-AWtE9T6iSw1p21vrJ19FRBtjvxGj9Tp',
  access_token_secret: 'Q4WiTrn8p1zbjnROkhv57QI0V2iJtnXZfRKcXjMgWEwdl',
});

//slice
exports.commands = { 
	action:process.argv[2], 
	value:process.argv[3]
}


var Spotify = require('node-spotify-api');
 
exports.spotifyKeys = new Spotify({
  id: '943fbe26c27843a1af2255f179c1c387',
  secret: '31573142e5bb48368f765307d7cb3656'
});
 



//use request package and file system 
//packages for spotify and twitter
//init to make sure we have json
//

/*
var nodeArgs = process.argv[3];
// Create an empty variable for holding the movie name
value = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    value = value + "+" + nodeArgs[i];
  }
  else {
    value += nodeArgs[i];
  }
}
*/

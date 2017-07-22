//npm json make sure create - use ..save 


var fs = require("fs");

var keys = require("./keys.js");
var keysT = keys.twitterKeys; 
var keysS = keys.spotifyKeys; 

var request = require("request");


//var action.process.argv[2]; 
//var value.process.argv[3];
//console.log(action);
//console.log(value);

//action.process.argv[2]; 
//value.process.argv[3];
//var action = process.argv[2]; 
//var value = process.argv[3];


if (keys.commands.action === 'movie-this' && keys.commands.value === undefined) { 
	movieNull();
	}	

if 	(keys.commands.action === 'movie-this' && keys.commands.value) { 
	movie();
}
	
if (keys.commands.action === 'my-tweets') { 
	twitter(); 
}

if (keys.commands.action === 'spotify-this-song' && keys.commands.value) { 
	spotify(); 
}

if (keys.commands.action === 'spotify-this-song' && keys.commands.value === undefined) { 
	spotifyNull(); 
}

if (keys.commands.action === 'do-what-it-says') { 
	doIt(); 
}




function movieNull() { 
// Then run a request to the OMDB API with the movie specified
var nothingURL = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=40e9cece";

request(nothingURL, function(error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMBD Rating: " + JSON.parse(body).imdbRating);

    if (JSON.parse(body).Ratings.length > 1 ){ 
    console.log("Rotten Rating: " + JSON.parse(body).Ratings[1].Value);
}
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
	console.log("Plot: " + JSON.parse(body).Plot);
	console.log("Actors: " + JSON.parse(body).Actors);
  }

})};


/*var secondNode = keys.commands.value;
// Create an empty variable for holding the movie name
	var secondNode = keys.commands.value; 
	var movieName = "";

for (var i = 3; i < secondNode.length; i++) {
  if (i > 3 && i < secondNode.length) {
    movieName = movieName + "+" + secondNode[i];
  }
  else {
    movieName += secondNode[i];
  }
}*/


function movie() { 

var queryUrl = "http://www.omdbapi.com/?t=" + keys.commands.value + "&y=&plot=short&apikey=40e9cece";

request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMBD Rating: " + JSON.parse(body).imdbRating);

    if (JSON.parse(body).Ratings.length > 1 ){ 
    console.log("Rotten Rating: " + JSON.parse(body).Ratings[1].Value);
}
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
	console.log("Plot: " + JSON.parse(body).Plot);
	console.log("Actors: " + JSON.parse(body).Actors);
  }

})};




function twitter() { 
	var params = {screen_name: 'joconnell_nw', count: 20};
	keysT.get('statuses/user_timeline', params, function(error, data, response) {
 	 if (!error) {
 	 	 for (var i = 0; i < data.length ; i++) {
   		 console.log(data[i].text);
  		}
 	 }
});
}



function spotify() { 

keysS.search({ type: 'track', query: keys.commands.value }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 	else { 
		var songInfo = data.tracks.items[0];
    	var songResult = console.log(songInfo.artists[0].name)
        console.log(songInfo.name)
        console.log(songInfo.album.name)
        console.log(songInfo.preview_url)
   		}
	});
}


function spotifyNull() { 

keysS.search({ type: 'track', query: 'the+sign+Ace+of+Base' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 	else { 
		var songInfo = data.tracks.items[0];
    	var songResult = console.log(songInfo.artists[0].name)
        console.log(songInfo.name)
        console.log(songInfo.album.name)
        console.log(songInfo.preview_url)
   		}
	});
}



function doIt() { 
// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  //var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  //console.log(dataArr);

  keysS.search({ type: 'track', query: data }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 	else { 
		var songInfo = data.tracks.items[0];
    	var songResult = console.log(songInfo.artists[0].name)
        console.log(songInfo.name)
        console.log(songInfo.album.name)
        console.log(songInfo.preview_url)
   		}
	});



});
}


 

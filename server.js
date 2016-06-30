// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');


//Require Schemas

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration

 

// -------------------------------------------------

// Main Route
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
})

app.post('/authenticate', function(req,res){

	res.send(true);
});

// Route to get all saved articles

// Route to add an article to saved list

// Route to delete an article from saved list

// -------------------------------------------------

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const mongodb = require('mongodb')

const PORT = process.env.PORT;
const mongoURL = 'mongodb://admin:admin@ds219100.mlab.com:19100/informatica-demo';

app = express();

const server = http.createServer(app)

app.use(express.static(__dirname+'/www')); //STATIC
app.use(bodyParser.text()); //PARSE REQUESTS

app.use(function(req, res, next){ //CORS
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	// allow preflight
	if(req.method === 'OPTIONS') res.send(200);
	else next();
});

require('./rest.js')

mongodb.MongoClient.connect(mongoURL, function(err, client) {
	if(err) console.log('DATABASE ERROR: '+err.message);
	else console.log('Database connected')
	server.listen(PORT, function(){
		console.log('Server Listening on %d', server.address().port);
	});
	global.db = client.db('informatica-demo')
});

require('./database.js')
require('./functions.js')

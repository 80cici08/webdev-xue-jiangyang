// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// loading authentication modules
var cookieParser = require('cookie-parser');
var session = require('express-session')
const passport = require('passport');

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

// install, load, and configure body parser module
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, "dist/webdev-jiangyang-cs5610")));


// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);

require("./server/app")(app);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/webdev-jiangyang-cs5610/index.html'));
});

// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port ' + port));

// var connectionString = 'mongodb://localhost:27017/webdev';
var connectionString = 'mongodb://admin:admin0@ds213715.mlab.com:13715/heroku_ts5hd0n5'
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const client = mongoose.connect(connectionString, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

import express from 'express';
var app = express();
var path = require("path");
var bodyParser = require('body-parser')

var Person = require('./app/model');


app.use(express.static(__dirname + '/src'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/add', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/Add-Person.html'));
});

app.get('/goToPerson', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/EditPerson.html'));
});

app.post('/save', function(req, res) {
  console.log(req.body.firstname);

  var newP = new Person({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.Email,
    bday: req.body.Birthday
  });

  newP.save(function(err, flf) {
    if (err) return console.error(err);
    console.log(flf);
  });

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;

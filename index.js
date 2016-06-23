const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser')

const Person = require('./app/model');

app.use(express.static(__dirname + '/src'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post('/save', function(req, res) {
  var P = new Person({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    birthday: req.body.birthday,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    zip: req.body.zip,
    state: req.body.state
  });

  P.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });
  res.send("Success");
});

app.get('/getdata', function(req, res){
  var P = new Person();
  Person.find(function(err, persons){
    console.log(persons);
    res.send(JSON.stringify(persons));
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(process.env.port, () => {
  console.log('Example app listening on port 3000!');
});

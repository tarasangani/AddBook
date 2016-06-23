//Import mongoose.js module from node_modules
var mongoose = require('mongoose');
mongoose.connect('mongodb://root:abcd1234@ds019054.mlab.com:19054/person');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected");
});

var Schema = mongoose.Schema;

var personSchema = new Schema({
  id: 0,
  firstname: String,
  lastname: String,
  email: String,
  birthday: Date,
  address1: String,
  address2: String,
  city: String,
  zip: Number,
  state: String,
});

var Person = mongoose.model('Person', personSchema);


module.exports = Person;

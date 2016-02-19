// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Adult = require('./adult');
var Child = require('./child');

// define the schema for our user model
var userSchema = mongoose.Schema({
  username: String,
  password: String,
  adults: [{
  	type: mongoose.Schema.Types.ObjectId,
  	ref: "Adult"
  }],
  children: [{
  	type: mongoose.Schema.Types.ObjectId,
  	ref: "Child"
  }]
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
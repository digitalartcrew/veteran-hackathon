var mongoose = require("mongoose");
var User = require("./user");

var adultSchema = new mongoose.Schema({
	 firstname: String,
  	lastname: String,
  	address: String,
  	apt: String,
  	city: String,
 	  state: String,
  	zip: Number,
  	phone: String,
  	email: String,
	 user: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: "User"
  }
});

module.exports = mongoose.model("Adult", adultSchema);
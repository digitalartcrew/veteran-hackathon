var mongoose = require("mongoose");
var User = require("./user");

var employerSchema = new mongoose.Schema({
	 firstname: String,
  	lastname: String,
	 user: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: "User"
  }
});

module.exports = mongoose.model("Employer", employerSchema);
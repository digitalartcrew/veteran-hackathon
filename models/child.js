var mongoose = require("mongoose");
var User = require("./user");

var childSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	age: Number,
	student: Boolean,
	ethnicity: String,
	race: String,
	type: String,
	income: Number,
	frequency: String,
	user: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: "User"
  }
});

module.exports = mongoose.model("Child", childSchema);
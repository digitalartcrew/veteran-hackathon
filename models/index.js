var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/veteran-db");

mongoose.set("debug", true);

module.exports.User = require("./user");
module.exports.Veteran = require("./veteran");
module.exports.Employer = require("./employer");
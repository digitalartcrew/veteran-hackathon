var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/adults/

router.get('/', function(req,res){
	db.Adult.find({user:req.user._id}, function(err,adults){
		// console.log("The adults",adults);
		res.status(200).send(adults);
	});
});

//Create POST /api/adults/

router.post('/', function(req,res){
	// console.log("IN REQ..USER:\n\n\n\n\n\n",req.user) 
	db.Adult.create(req.body,function(err,adult){
		adult.user = req.user._id;  
		adult.save();
		console.log("THE NEW ADULT:", adult);
		res.status(201).send(adult);

	});
});

//Get SHOW /api/adults/:id

router.get('/:id', function(req,res){
	db.Adult.findById(req.params.id, function(err,adult){
		res.status(200).send(adult);
	});
});

//Update PUT /api/adults/:id

router.put('/:id',function(req,res){
	db.Adult.findByIdAndUpdate(req.params.id,req.body, function(err,adult){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(adult);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Adult.findByIdAndRemove(req.params.id, function(err,adult){
		res.status(200).send(adult);
	});
});

module.exports = router;


var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/employers/

router.get('/', function(req,res){
	db.Employer.find({user:req.user._id}, function(err,employers){
		// console.log("The employers",employers);
		res.status(200).send(employers);
	});
});

//Create POST /api/employers/

router.post('/', function(req,res){
	// console.log("IN REQ..USER:\n\n\n\n\n\n",req.user) 
	db.Employer.create(req.body,function(err,employer){
		employer.user = req.user._id;  
		employer.save();
		console.log("THE NEW employer:", employer);
		res.status(201).send(employer);

	});
});

//Get SHOW /api/employers/:id

router.get('/:id', function(req,res){
	db.Employer.findById(req.params.id, function(err,employer){
		res.status(200).send(employer);
	});
});

//Update PUT /api/employers/:id

router.put('/:id',function(req,res){
	db.Employer.findByIdAndUpdate(req.params.id,req.body, function(err,employer){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(employer);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Employer.findByIdAndRemove(req.params.id, function(err,employer){
		res.status(200).send(employer);
	});
});

module.exports = router;


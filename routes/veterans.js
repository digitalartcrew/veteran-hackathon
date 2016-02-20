var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/veterans/

router.get('/', function(req,res){
	db.Veteran.find({user:req.user._id}, function(err,veterans){
		res.status(200).send(veterans);
	});
});

//Create POST /api/veterans/

router.post('/', function(req,res){
	db.Veteran.create(req.body,function(err,veteran){
		veteran.user = req.user._id;  
		veteran.save();
		res.status(201).send(veteran);
	});
});

//Get SHOW /api/veterans/:id

router.get('/:id', function(req,res){
	db.Veteran.findById(req.params.id, function(err,veteran){
		res.status(200).send(veteran);
	});
});

//Update PUT /api/veterans/:id

router.put('/:id',function(req,res){
	db.Veteran.findByIdAndUpdate(req.params.id,req.body, function(err,veteran){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(veteran);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Veteran.findByIdAndRemove(req.params.id, function(err,veteran){
		res.status(200).send(veteran);
	});
});

module.exports = router;


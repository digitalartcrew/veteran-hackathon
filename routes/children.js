var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/childs/

router.get('/', function(req,res){
	db.Child.find({user:req.user._id}, function(err,children){
		res.status(200).send(children);
	});
});

//Create POST /api/childs/

router.post('/', function(req,res){
	db.Child.create(req.body,function(err,child){
		child.user = req.user._id;  
		child.save();
		res.status(201).send(child);
	});
});

//Get SHOW /api/childs/:id

router.get('/:id', function(req,res){
	db.Child.findById(req.params.id, function(err,child){
		res.status(200).send(child);
	});
});

//Update PUT /api/childs/:id

router.put('/:id',function(req,res){
	db.Child.findByIdAndUpdate(req.params.id,req.body, function(err,child){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(child);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Child.findByIdAndRemove(req.params.id, function(err,child){
		res.status(200).send(child);
	});
});

module.exports = router;


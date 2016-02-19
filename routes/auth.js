//Routes for handling user login and authentication

var db = require("../models");

module.exports = function(app, passport) {
    // process the login form
    app.post("/login", passport.authenticate('local-login'), function(req, res) {
      res.json(req.user);
      console.log("Inside Auth JS USER:",req.user)
    });

    // handle logout
    app.post("/logout", function(req, res) {
      req.logOut();
      res.send(200);
    });

    // loggedin
    app.get("/loggedin", function(req, res) {
      res.send(req.isAuthenticated() ? req.user : '0');
    });

    // signup
    app.post("/signup", function(req, res) {
      db.User.findOne({
        username: req.body.username
      }, function(err, user) {
        if (user) {
          res.json(null);
          console.log("User already exists in the database");
          return;
        } else {
          var newUser = new db.User();
          newUser.username = req.body.username.toLowerCase();
          console.log('We are here!')
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save(function(err, user) {
            req.login(user, function(err) {
              if (err) {
                return next(err);
              }
              res.json(user);
            });
          });
        }
      });
    });

//     //Index GET /api/adults/

//     app.get('/', function(req,res){
//       db.Adult.find({}, function(err,adults){
//         res.status(200).send(adults);
//       });
//     });

// //Create POST /api/adults/

//     app.post('/', function(req,res){
//     db.Adult.create(req.body,function(err,adult){
//       res.status(201).send(adult);
//     });
//     });

// //Get SHOW /api/adults/:id

//   app.get('/:id', function(req,res){
//     db.Adult.findById(req.params.id, function(err,adult){
//       res.status(200).send(adult);
//     });
//   });

// //Update PUT /api/adults/:id

//   app.put('/:id',function(req,res){
//     db.Adult.findByIdAndUpdate(req.params.id,req.body, function(err,adult){
//      if (err) res.status(500).send({error: "Double check for error"});
//      res.status(201).send(adult);
//    });
//   });

// //Delete 

// app.delete('/:id', function(req,res){
//   db.Adult.findByIdAndRemove(req.params.id, function(err,adult){
//     res.status(200).send(adult);
//   });
// });

// //Index GET /api/childs/

// app.get('/', function(req,res){
//   db.Child.find({}, function(err,children){
//     res.status(200).send(childs);
//   });
// });

// //Create POST /api/childs/

// app.post('/', function(req,res){
//   db.Child.create(req.body,function(err,children){
//     res.status(201).send(child);
//   });
// });

// //Get SHOW /api/childs/:id

// app.get('/:id', function(req,res){
//   db.Child.findById(req.params.id, function(err,children){
//     res.status(200).send(child);
//   });
// });

// //Update PUT /api/childs/:id

// app.put('/:id',function(req,res){
//   db.Child.findByIdAndUpdate(req.params.id,req.body, function(err,child){
//    if (err) res.status(500).send({error: "Double check for error"});
//    res.status(201).send(child);
//  });
// });

// //Delete 

// app.delete('/:id', function(req,res){
//   db.Child.findByIdAndRemove(req.params.id, function(err,child){
//     res.status(200).send(child);
//   });
// });
};




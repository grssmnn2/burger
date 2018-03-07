var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

// CREATE ALL ROUTES, EXPORT ROUTER AT END OF PAGE

// when on home page, load all burger data
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgObj = {
            burgers: data
        };
        console.log(burgObj);
        // render index page with all burgers displayed
        res.render("index", burgObj);
    });
});

// to create a new burger, use post route
router.post("/api/burgers", function(req, res){
    burger.insertOne([req.body.burger_name], function(result) {
        res.json({id: result.id});
    });    
});

// update a burger to devoured
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.body.id,
      function(result) {
          res.render("index", {
              "devoured": devoured
          });
       });
  });

module.exports = router;
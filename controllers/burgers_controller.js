var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

// CREATE ALL ROUTES, EXPORT ROUTER AT END OF PAGE

// when on home page, 
router.get("/", function(req, res){
    // load all burger data
    burger.selectAll(function(data){
        // render index page with all burgers displayed
        // this is only in get request        
    res.render("index", { burger_data: data });
    });
});

// to create a new burger, use post route
// this is saying what to do if you receive a post request
router.post("/api/burgers", function(req, res){
    // use insert function to add whatever user entered in input box
    console.log(req.body);
    burger.insertOne([req.body.burger_name], function(result) {
     res.json({id:result.insertId})  
    });    
});

// update a burger status to devoured
router.put("/api/burgers/:id", function(req, res) {
    // update the burger that was clicked on to be devoured
    burger.updateOne(req.params.id,
        function(result) {
          if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    
        }
      );
    });

module.exports = router;
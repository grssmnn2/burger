var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();
// create all the routes to various pages here
// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
//    * `burger.js`
// 4. Create the `router` for the app, and export the `router` at the end of your file.


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
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId});
    });    
});

// update a burger to devoured
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
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
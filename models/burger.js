// require orm
var orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input
//  for the ORM.

// * Export at the end of the `burger.js` file.

var burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    
    insertOne: function(burger_name, cb) {
      orm.insertOne(burger_name, function(res) {
        cb(res);
      });
    },
    updateOne: function(id, cb) {
      orm.updateOne(id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = burger;
// require orm
var orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input
//  for the ORM.

// * Export at the end of the `burger.js` file.

var burger = {
    selectAll: function(table, cb) {
      orm.selectAll(table, function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(table, cols, vals, cb) {
      orm.insertOne(table, cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(table, objColVals, condition, cb) {
      orm.updateOne(table, objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = burger;
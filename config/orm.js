var connection = require ("./connection.js");

// DEFINE YOUR FUNCTIONS HERE AND EXPORT ORM

  var orm = {
    // show all burger table contents
    selectAll: function(cb) {
      var queryString = "SELECT * FROM  burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    // insert a new burger
    insertOne: function(burger_name, cb) {   
      var queryString = "INSERT INTO burgers SET ?";  
      connection.query(queryString, 
        {burger_name: burger_name, devoured: false},
        function(err, result) {
        if (err) {
          throw err;
        }  
        cb(result);
      });
    },
    // update one specific burger
    updateOne: function(id, cb){
      // change burger devoured to true     
      connection.query('UPDATE burgers SET ? WHERE ?', 
      [{devoured: true}, {id: id}], function (err, result) {
        if (err) {
          throw err;
        }  
        cb(result);
      });
    }
  
  };
  
  // Export the orm object for the model
  module.exports = orm;
  
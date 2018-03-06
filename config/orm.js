var connection = require ("./connection.js");
// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// * Export the ORM object in `module.exports`.
  var orm = {
    // use cb to prevent result from coming back undefined
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM " + table;
      connection.query(queryString, table, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
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
    
    updateOne: function(burgerID, cb){
      // Run MySQL Query
      connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) {
          throw err;
        }  
        cb(result);
      });
    }
  };
  
  // Export the orm object for the model
  module.exports = orm;
  
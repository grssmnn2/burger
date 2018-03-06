// button logic for on click events updating
$(function() {
    // when user clicks devour button, burger should move to eaten category
    $(".change-devour").on("click", function(event) {
        // grab the id of the burger being clicked on
      var id = $(this).data("id");
        //identify whether or not burger has already been eaten
      var newDevour = $(this).data("newDevour");
  
      var newEatenState = {
        eaten: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed devoured or no", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
//   grab the name value the user entered
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: devoured
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
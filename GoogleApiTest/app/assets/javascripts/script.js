$(document).ready(function(){
  console.log("loaded");
  var $body = $('body');
// not active yet, for getting the locations out of a form.
  var getETA  = function(){
// this is front end, could grab the info out of form here
    var origin = form-value (like .val)
    var destination = 
    $.ajax({
      type: "GET",
      url: "/eta/"+origin+"/"+destination,
      error: function(){
      alert('ERROR')
      },
      success: function(data){
        // debugger
 // the data i want on the page 

      }
    })

  } // getResults

  // Event Handlers go here
  $("button").on("click", getETA);
});
$(document).ready(function() {
 var chosen;
 var luke = $("#skywalker").val();
 var obi = $("#kenobi").val();
 var vader = $("#darth-vader").val();
 var revan = $("#darth-revan").val();
 var fighterChosen = false;
 var opponentChosen = false;
 var counter = 12;
 
 console.log(luke);

  $(".player").on("click", function() {
    chosen = $(this).val();
    
    if (fighterChosen === false) {
      if (chosen === luke) {
        $(this).appendTo("#chosenChar");
        fighterChosen = true;
      }
      else {
        $("#skywalker").appendTo("#attackers");
        fighterChosen = true;
      }
      if (chosen === obi) {
        $(this).appendTo("#chosenChar");
        fighterChosen = true;        
      }
      else {
        $("#kenobi").appendTo("#attackers");
        fighterChosen = true;        
      }
      if (chosen === vader) {
        $(this).appendTo("#chosenChar");
        fighterChosen = true;        
      }
      else {
        $("#darth-vader").appendTo("#attackers");
        fighterChosen = true;
      }
      if (chosen === revan) {
        $(this).appendTo("#chosenChar");
        fighterChosen = true;        
      }
      else {
        $("#darth-revan").appendTo("#attackers");
        fighterChosen = true;
      }
    }
    
    else if (fighterChosen === true) {
      $(this).appendTo("#opponent");
      opponentChosen = true;
    } 
  });

  $(".attack").on("click", function() {
     
  });
  

});
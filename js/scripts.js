//Backend Logic
function pingPong(userInput) {
  var output = [];

  if (isNaN(userInput)) {
    alert("Please enter a number");
  } else if (userInput <= 0) {
    alert("Please enter a number greater than 0");
  } else

  for (var i = 1; i <= userInput; i+= 1) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else {
      output.push(i);
    }
  }
  return output;
}


$(document).ready(function() {
  $("#formOne").submit(function(event){
    var userInput = parseInt($("#userInput").val());
    var output = pingPong(userInput);
    $("#ul1").empty();


    output.forEach(function(number) {
      $("#ul1").append("<li>" + number + "</li>");
    })

    $("button#reset").click(function() {
      $("#ul1").empty();
    })

    event.preventDefault();
  });
});

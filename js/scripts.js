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
      output.push("Ping-Pong!");
    } else if (i % 5 === 0) {
      output.push("Pong");
    } else if (i % 3 === 0) {
      output.push("Ping");
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


    output.forEach(function(number) {
      $("ul").append("<li>" + number + "</li>");
    })

    $("button#reset").click(function() {
      $("ul").empty();
    })

    event.preventDefault();
  });
});

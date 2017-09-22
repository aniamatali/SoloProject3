function pingPong(userInput) {
  var output = [];

  if (isNaN(userInput)) {
    alert("Please enter a number");
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
    $("ul").empty();

    output.forEach(function(number) {
      $("ul").append("<li>" + number + "</li>");
    })
    event.preventDefault();
  });
  });

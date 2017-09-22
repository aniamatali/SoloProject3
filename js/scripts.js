function pingPong(userInput) {
  var output = [];
  for (var i = 1; i <= userInput; i+= 1) {
    if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else if (i % 15 === 0) {
      output.push("ping-pong");
    } else {
      output.push(i);
    }
  }
  return output;
}


$(document).ready(function() {
  $("#formOne").submit(function(event){
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);
    var output = pingPong(userInput);
    console.log(output);
    event.preventDefault();

  });
  });

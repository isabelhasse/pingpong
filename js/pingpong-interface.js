var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(number);
    $("#output").html(pingpong(number));
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(number);
    $("#output").html(output);
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#thank-you').prepend('<p>Thank you,' + email + ' has been added to our list!</p>')
  });
});

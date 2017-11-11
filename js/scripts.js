var pingpong = function(number) {
  var numbers = [];
  for (i=1; i<=number; i++) {
    numbers.push(i);
  };
  return numbers;
};


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    $("#output").text(pingpong(number));
  });
});

function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(number) {
  var numbers = [];
  for (i=1; i<=number; i++) {
    if (i % 3 === 0 && i % 5 != 0){
      numbers.push(" ping,");
    } else if (i % 5 === 0 && i % 3 != 0) {
      numbers.push(" pong,")
    } else if (i % 15 === 0) {
      numbers.push(" <span class='pingpong'>pingpong,</span>")
    } else {
      numbers.push(" " + i + ",");
    }
  };
  return numbers;
};

exports.calculatorModule = Calculator;

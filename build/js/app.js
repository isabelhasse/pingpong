(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/pingpong.js":1}]},{},[2]);

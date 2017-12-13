"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// first task
var hello = "Hello",
    world = "world";
var sayHello = console.log(hello + " " + world);

// second task
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(5, 2));

// third task
var average = function average() {
  for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
    param[_key] = arguments[_key];
  }

  var total = 0;
  param.forEach(function (item) {
    total += item;
  });
  return total / param.length;
};
console.log(average(3, 10, 5));

// fourth task
console.log(average.apply(undefined, _toConsumableArray(grades)));

// fifth task
var data = [1, 4, "Iwona", false, "Nowak"];
var name = data[2],
    lastName = data[4];

console.log(name + " " + lastName);

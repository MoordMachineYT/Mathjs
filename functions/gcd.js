"use strict";
/**
* Represents the function that returns the greatest common divisor
* @arg {Number} arguments The arguments
*/
const gcd = function() {
  if (arguments.length === 2) {
    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") return new TypeError("The arguments must be numbers");
    var x = Math.abs(arguments[0]);
    var y = Math.abs(arguments[1]);
    while (y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else if (arguments.length === 0) {
    return new TypeError("No arguments given");
  } else {
    var len, a, b;
    len = arguments.length;
    if (!len) {
      return new TypeError("No arguments given");
    }
    a = arguments[0];
    for ( var i = 1; i < len; i++ ) {
		b = arguments[i];
		a = gcdtemplate(a, b);
	}
	return a;
  }
}

function gcdtemplate(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) return new TypeError("The arguments must be numbers");
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
module.exports = gcd;

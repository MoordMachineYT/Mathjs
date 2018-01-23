"use strict";

function lcm(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number'))
    return new TypeError("The arguments must be numbers");
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

module.exports = lcm;

"use strict";

/**
* Represents a factorial function
* @param {Number} number The parameter
*/
function factorial (number) {
  var newNumber = 1;
  for (i = number; i > 0; i--) {
    newNumber = newNumber * i;
  }
  return newNumber;
}

module.exports = factorial;

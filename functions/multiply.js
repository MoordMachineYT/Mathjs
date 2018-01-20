"use strict";

/**
* Represents a multiplier
* @param {Number | Array<Number>} numbers The parameter
*/
function multiply (numbers) {
  var newNumber = 1;
  if (typeof numbers === "array") {
    for (i = numbers.length; i > 0; i++) {
      newNumber = newNumber * i;
    }
  } else newNumber = numbers;
  return newNumber;
}

module.exports = multiply;

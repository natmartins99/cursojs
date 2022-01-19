"use strict";

//5! = 5*4*3*2*1
function fatorial(n) {
  var fat = 1;

  for (var c = n; c > 1; c--) {
    fat *= c;
  }

  return fat;
}

console.log(fatorial(5));
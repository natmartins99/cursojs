"use strict";

var num = [5, 8, 2, 9, 3];
num[5] = 4;
num.push(1);
num.sort();
console.log(num);
console.log("Nosso vetor tem ".concat(num.length, " posi\xE7\xF5es"));
console.log("O primeiro valor \xE9 ".concat(num[0]));
var pos = num.indexOf(8);

if (pos == -1) {
  console.log("O valor n\xE3o foi encontrado!");
} else {
  console.log("O valor 8 est\xE1 na posi\xE7\xE3o ".concat(pos));
}
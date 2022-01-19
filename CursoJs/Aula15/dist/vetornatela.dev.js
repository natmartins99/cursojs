"use strict";

var valores = [8, 1, 7, 4, 2, 9];
console.log(valores);
/*
for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}]
*/

for (var pos in valores) {
  console.log("A posi\xE7\xE3o ".concat(pos, " tem o valor ").concat(valores[pos]));
}

num.indexOf(7); //procurar o valor e retorna a sua posição
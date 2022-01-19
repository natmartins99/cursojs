"use strict";

var num = document.getElementById(fnum);
var list = document.querySelector('select#flist');
var res = document.querySelector('div#res');
var valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    var item = document.createElement('option');
    item.text = "Valor ".concat(num.value, " adicionado");
    list.appendChild(item);
    res.innerHTML = '';
  } else {
    window.alert('Valor inválido ou já encontrado na lista.');
  }

  num.value = '';
  num.focus();
}

function Fim() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!');
  } else {
    var total = valores.length;
    var maior = valores[0];
    var menor = valores[0];
    var soma = 0;
    var media = 0;

    for (var pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }

    media = soma / total;
    res.innerHTML = '';
    res.innerHTML += "<p>Ao todo, temos ".concat(total, " n\xFAmeros cadastrados.</p>");
    res.innerHTML += "<p>O menor valor informado foi ".concat(maior, "</p>");
    res.innerHTML += "<p>O menor valor informado foi ".concat(menor, "</p>");
    res.innerHTML += "<p>Somando todos os valores, temos ".concat(soma, "</p>");
    res.innerHTML += "<p>A m\xE9dia dos valores \xE9 ".concat(media, "</p>");
  }
}
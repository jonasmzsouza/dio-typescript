"use strict";
exports.__esModule = true;
exports.numero = void 0;
function soma(a, b) {
    return a + b;
}
var animal = {
    nome: 'Girafa',
    tipo: 'terrestre',
    domestico: false,
    executarRugido: function (alturaEmmDecibeis) { return (alturaEmmDecibeis + "dB"); }
};
animal.executarRugido(50);
var felino = {
    nome: 'Leopardo',
    tipo: "terrestre",
    domestico: false,
    visaoNoturna: true,
    executarRugido: function (alturaEmmDecibeis) { return (alturaEmmDecibeis + "dB"); }
};
felino
    .executarRugido(80);
var animalT = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    executarRugido: function (alturaEmmDecibeis) { return (alturaEmmDecibeis + "dB"); }
};
// tratando a tag input
var input = document.getElementById('input');
input.addEventListener('input', function (event) {
    var i = event.currentTarget;
    console.log(i.value);
});
// Generic types
function adicionaApendiceALista(array, valor) {
    return array.map(function () { return valor; });
}
adicionaApendiceALista([1, 2, 3], 1);
function redirecione(usuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo)
    }
    // redirecionar para a área de usuário
}
var MeuCachorro = /** @class */ (function () {
    function MeuCachorro(nome, idade, parqueFavorito) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
    return MeuCachorro;
}());
var cao = new MeuCachorro('Bravo', 13, 'Ipirabuera');
var jquery_1 = require("jquery");
jquery_1["default"].fn.extend({
    novaFuncao: function () {
        console.log('Chamou nova função');
    }
});
jquery_1["default"]('body').novaFuncao();
exports.numero = 2;
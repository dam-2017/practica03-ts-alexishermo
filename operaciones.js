"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operaciones = (function () {
    function operaciones(numero) {
        this.numero = numero;
    } //constructor
    operaciones.prototype.numerosSuma = function (num) {
        return this.numero + num;
    }; //numerosSuma
    operaciones.prototype.numerosResta = function (num) {
        return this.numero - num;
    }; //numerosResta
    operaciones.prototype.numerosFactorial = function (num) {
        var res = 1;
        for (var i = 1; i <= num; i++) {
            res *= i;
        } //for
        return res;
    }; //numerosFactorial
    operaciones.prototype.numerosPrimos = function (num) {
        var valor = num;
        var NumeroPrimo = true;
        for (var i = 1; i < valor; i++) {
            // If factor
            if (valor / i == Math.round(valor / i) && i != 1 && i != valor) {
                NumeroPrimo = false;
                break;
            }
            ;
        }
        ;
        if (NumeroPrimo) {
            return "El numero es primo";
        }
        else {
            return "El numero NO es primo";
        }
    }; //numerosPrimos
    return operaciones;
}()); //class
exports.operaciones = operaciones;

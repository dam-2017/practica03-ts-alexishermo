"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena = (function () {
    function cadena(cadena) {
        this.cont = 0;
        this.cont2 = 1;
        this.cadena = cadena;
    } //constructor
    Object.defineProperty(cadena.prototype, "cadenaPalindromo", {
        get: function () {
            return this.cadena.split('').reverse().join('') === this.cadena;
        } //cadenaPalindromo
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cadena.prototype, "cadenaVocales", {
        get: function () {
            for (var x = 0; x < this.cadena.length; x++) {
                if ((this.cadena.charAt(x) == 'a') || (this.cadena.charAt(x) == 'e') || (this.cadena.charAt(x) == 'i') || (this.cadena.charAt(x) == 'o') || (this.cadena.charAt(x) == 'u')) {
                    this.cont++;
                } //if
            } //for
            return this.cont;
        } //cadenaVocales
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cadena.prototype, "cadenaLetras", {
        get: function () {
            return this.cadena.length;
        } //cadenaLetras
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cadena.prototype, "cadenaPalabras", {
        get: function () {
            var cadena = this.cadena.trim();
            var pos = cadena.indexOf(" ");
            while (pos != -1) {
                this.cont2++;
                pos = cadena.indexOf(" ", pos + 1);
            } //while
            return this.cont2;
        } //cadenaLetras
        ,
        enumerable: true,
        configurable: true
    });
    return cadena;
}()); //class
exports.cadena = cadena;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var operaciones_1 = require("./operaciones");
//------ASIGNACIÓN DE VALORES------//
var cad = new cadena_1.cadena("ama");
var ope = new operaciones_1.operaciones(2);
//------CADENAS------//
console.log("La cadena es palindromo?: " + cad.cadenaPalindromo);
console.log("La cadena tiene: " + cad.cadenaVocales + " vocales.");
console.log("La cadena tiene: " + cad.cadenaLetras + " letras.");
console.log("La cadena tiene: " + cad.cadenaPalabras + " palabras.");
//------OPERACIONES------//
console.log("La suma es: " + ope.numerosSuma(4));
console.log("La resta es: " + ope.numerosResta(1));
console.log("El factorial es: " + ope.numerosFactorial(7));
console.log("El numero es primo?: " + ope.numerosPrimos(6));

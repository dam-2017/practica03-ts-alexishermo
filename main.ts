import { cadena } from './cadena';
import { operaciones } from './operaciones';

//------ASIGNACIÓN DE VALORES------//
let cad:any= new cadena("ama");
let ope:any= new operaciones(2);


//------CADENAS------//
console.log("La cadena es palindromo?: "+ cad.cadenaPalindromo);
console.log("La cadena tiene: "+ cad.cadenaVocales+" vocales.");
console.log("La cadena tiene: "+ cad.cadenaLetras+" letras.");
console.log("La cadena tiene: "+ cad.cadenaPalabras+" palabras.");

//------OPERACIONES------//
console.log("La suma es: "+ ope.numerosSuma(4));
console.log("La resta es: "+ ope.numerosResta(1));
console.log("El factorial es: "+ ope.numerosFactorial(7));
console.log("El numero es primo?: "+ ope.numerosPrimos(6));








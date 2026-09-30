const prompt = require('prompt-sync')();
 
let numero1 = Number(prompt("Escribe un numero: "));
let operacion = prompt("Escribe el simbolo para la operacion (+, -, *, /): ");
let numero2 = Number(prompt("Escribe otro numero: "));
 
let signosValidos = ["+", "-", "*", "/"];
 
while (!signosValidos.includes(operacion)) {
    console.log("Símbolo no válido. Intenta de nuevo.");
    operacion = prompt("Escribe el simbolo para la operacion (+, -, *, /): ");
}
 
let resultado;
 
if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else if (operacion === "/") {
    resultado = numero1 / numero2;
}
 
console.log("El resultado es: " + resultado);



const prompt = require('prompt-sync')();

function pedirNumero(mensaje) {
    let numero = Number(prompt(mensaje));
    return numero;
}

function calcular(numero1, operacion, numero2) {
    if (operacion === "+") {
        return numero1 + numero2;
    } else if (operacion === "-") {
        return numero1 - numero2;
    } else if (operacion === "*") {
        return numero1 * numero2;
    } else if (operacion === "/") {
        if (numero2 === 0) {
            return "No se puede dividir entre 0";
        }
        return numero1 / numero2;
    } else {
        return "Operación no válida";
    }
}
 
function mostrarResultado(resultado) {
    console.log(`Resultado: ${resultado}`);
}
function atenderOperacion() {
    let numero1 = pedirNumero("Escribe un número: ");
    let operacion = prompt("Escribe el símbolo de la operación (+, -, *, /): ");
    let numero2 = pedirNumero("Escribe otro número: ");
    let resultado = calcular(numero1, operacion, numero2);
    mostrarResultado(resultado);
}
let activo = true; 
console.log("¡Bienvenido al Mini Cajero!");

while (activo) {
    atenderOperacion();
    let respuesta = prompt("¿Quieres hacer otra operación? (s/n): ");
    if (respuesta !== "s") {
        activo = false;
    }
}
 
console.log("¡Hasta luego! Gracias por usar el Mini Cajero.");
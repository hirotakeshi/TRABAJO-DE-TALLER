var numero1 = prompt("Por favor, introduce el primer número:");
var numero2 = prompt("Ahora, introduce el segundo número:");

if (numero1 > numero2) {
    console.log("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
} else if (numero2 > numero1) {
    console.log("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
} else {
    console.log("Ambos números son iguales.");
}
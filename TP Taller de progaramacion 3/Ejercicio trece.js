function esDivisible(numero, divisor) {
    return numero % divisor === 0;
}

function main() {
    const numero = parseInt(prompt("Ingrese un número entero: "));

    if (esDivisible(numero, 2) || esDivisible(numero, 3) || esDivisible(numero, 5) || esDivisible(numero, 7)) {
        console.log(`${numero} es divisible por 2, 3, 5 o 7`);
    } else {
        console.log(`${numero} no es divisible por 2, 3, 5 ni 7`);
    }
}

main();


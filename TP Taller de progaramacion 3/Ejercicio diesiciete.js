function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    const numero = parseInt(prompt("Ingrese un número entero positivo mayor que 1: "));

    if (isNaN(numero) || numero <= 1) {
        console.log("Por favor, ingrese un número entero positivo mayor que 1.");
        return;
    }

    if (esPrimo(numero)) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}

main();
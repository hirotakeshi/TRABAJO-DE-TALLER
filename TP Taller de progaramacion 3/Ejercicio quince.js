function obtenerDivisores(numero) {
    const divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}

function main() {
    const numero = parseInt(prompt("Ingrese un número entero: "));

    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
        return;
    }

    const divisores = obtenerDivisores(numero);

    console.log(`Los divisores de ${numero} son: ${divisores.join(', ')}`);
}

main();
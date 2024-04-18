function obtenerDivisores(numero) {
    const divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}

function obtenerDivisoresComunes(numero1, numero2) {
    const divisoresComunes = [];
    const divisoresNumero1 = obtenerDivisores(numero1);
    const divisoresNumero2 = obtenerDivisores(numero2);

    for (const divisor of divisoresNumero1) {
        if (divisoresNumero2.includes(divisor)) {
            divisoresComunes.push(divisor);
        }
    }

    return divisoresComunes;
}

function main() {
    const numero1 = parseInt(prompt("Ingrese el primer número entero: "));
    const numero2 = parseInt(prompt("Ingrese el segundo número entero: "));

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, ingrese números válidos.");
        return;
    }

    const divisoresComunes = obtenerDivisoresComunes(numero1, numero2);

    if (divisoresComunes.length === 0) {
        console.log("Los números ingresados no tienen divisores comunes.");
    } else {
        console.log(`Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes.join(', ')}`);
    }
}

main();
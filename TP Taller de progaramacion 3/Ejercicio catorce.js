function main() {
    const numero = parseInt(prompt("Ingrese un número entero: "));
    let divisores = [];

    if (numero % 2 === 0) {
        divisores.push(2);
    }
    if (numero % 3 === 0) {
        divisores.push(3);
    }
    if (numero % 5 === 0) {
        divisores.push(5);
    }
    if (numero % 7 === 0) {
        divisores.push(7);
    }

    if (divisores.length > 0) {
        console.log(`${numero} es divisible por ${divisores.join(', ')}`);
    } else {
        console.log(`${numero} no es divisible por 2, 3, 5 ni 7`);
    }
}

main();
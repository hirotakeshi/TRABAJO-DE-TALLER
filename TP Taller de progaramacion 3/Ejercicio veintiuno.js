function main() {
    let numeros = [];
    let entrada;

    do {
        entrada = prompt("Ingrese un número (o presione 'Cancelar' para finalizar): ");
        if (entrada !== null) {
            const numero = parseFloat(entrada);
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    } while (entrada !== null);

    if (numeros.length > 0) {
        const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
        alert("La suma total de los números introducidos es: " + sumaTotal);
    } else {
        alert("No se ingresaron números.");
    }
}

main();
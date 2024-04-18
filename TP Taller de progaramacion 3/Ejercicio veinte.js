function main() {
    let cadenas = [];
    let cadena;

    do {
        cadena = prompt("Ingrese una cadena de texto (o presione 'Cancelar' para finalizar): ");
        if (cadena !== null) {
            cadenas.push(cadena);
        }
    } while (cadena !== null);

    if (cadenas.length > 0) {
        const cadenaConcatenada = cadenas.join("-");
        console.log("Cadenas concatenadas:", cadenaConcatenada);
    } else {
        console.log("No se ingresaron cadenas de texto.");
    }
}

main();
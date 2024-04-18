function obtenerCalificacion(nota) {
    if (nota >= 0 && nota <= 3) {
        return "Muy deficiente";
    } else if (nota > 3 && nota <= 5) {
        return "Insuficiente";
    } else if (nota > 5 && nota <= 6) {
        return "Suficiente";
    } else if (nota > 6 && nota <= 7) {
        return "Bien";
    } else if (nota > 7 && nota <= 9) {
        return "Notable";
    } else if (nota > 9 && nota <= 10) {
        return "Sobresaliente";
    } else {
        return "Nota fuera de rango. Por favor, ingrese una nota entre 0 y 10.";
    }
}

function main() {
    const nota = parseFloat(prompt("Ingrese la nota (número): "));

    if (isNaN(nota)) {
        console.log("Por favor, ingrese una nota válida.");
        return;
    }

    const calificacion = obtenerCalificacion(nota);
    console.log(`La calificación para la nota ${nota} es: ${calificacion}`);
}

main();
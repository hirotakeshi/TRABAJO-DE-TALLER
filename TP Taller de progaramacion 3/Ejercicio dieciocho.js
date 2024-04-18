function main() {
    const edad = parseInt(prompt("Ingrese su edad: "));

    if (isNaN(edad)) {
        console.log("Por favor, ingrese una edad válida.");
        return;
    }

    if (edad >= 18) {
        console.log("¡Ya puede conducir!");
    } else {
        console.log("Lo siento, aún no puede conducir.");
    }
}

main();
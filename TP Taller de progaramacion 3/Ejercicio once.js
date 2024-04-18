var frase = prompt("Por favor, introduce una frase:");
var contadorVocales = 0;

for (var i = 0; i < frase.length; i++) {
    var caracter = frase[i].toLowerCase();
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contadorVocales++;
    }
}

console.log("La frase contiene " + contadorVocales + " vocales.");
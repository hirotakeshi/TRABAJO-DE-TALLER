var frase = prompt("Por favor, introduce una frase:");
var vocales = "";

for (var i = 0; i < frase.length; i++) {
    var caracter = frase[i].toLowerCase();
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        vocales += caracter + " ";
    }
}

console.log("Las vocales que aparecen en la frase son: " + vocales);
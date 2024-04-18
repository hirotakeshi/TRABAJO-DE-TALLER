var frase = prompt("Por favor, introduce una frase:");
var contador = 0;

for (var i = 0; i < frase.length; i++) {
    if (frase[i] === 'a' || frase[i] === 'A') {
        contador++;
    }
}

console.log("La letra 'a' aparece " + contador + " veces en la frase.");
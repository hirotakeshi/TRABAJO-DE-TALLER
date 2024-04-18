var frase = prompt("Por favor, introduce una frase:");
var contadorA = 0;
var contadorE = 0;
var contadorI = 0;
var contadorO = 0;
var contadorU = 0;

for (var i = 0; i < frase.length; i++) {
    var caracter = frase[i].toLowerCase();
    switch (caracter) {
        case 'a':
            contadorA++;
            break;
        case 'e':
            contadorE++;
            break;
        case 'i':
            contadorI++;
            break;
        case 'o':
            contadorO++;
            break;
        case 'u':
            contadorU++;
            break;
    }
}

console.log("La vocal 'a' aparece " + contadorA + " veces.");
console.log("La vocal 'e' aparece " + contadorE + " veces.");
console.log("La vocal 'i' aparece " + contadorI + " veces.");
console.log("La vocal 'o' aparece " + contadorO + " veces.");
console.log("La vocal 'u' aparece " + contadorU + " veces.");
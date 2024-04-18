function esMultiploDe4(numero) {
    return numero % 4 === 0;
}

function esMultiploDe9(numero) {
    return numero % 9 === 0;
}

for (let i = 1; i <= 500; i++) {
    console.log(i + (esMultiploDe4(i) ? ' (Múltiplo de 4)' : '') + (esMultiploDe9(i) ? ' (Múltiplo de 9)' : ''));
    if (i % 5 === 0 && i !== 500) {
        console.log("——————————————————————————————————————————————");
    }
}
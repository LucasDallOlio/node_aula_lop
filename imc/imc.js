const readline = require('readline-sync');

const peso = Number(readline.question('Seu peso?'));
console.log(typeof peso);

const altura = Number(readline.question('Sua altura?'));
console.log(typeof altura);

const imc = peso/(altura**2);
console.log(`Seu Imc é: ${imc.toFixed(1)}`);
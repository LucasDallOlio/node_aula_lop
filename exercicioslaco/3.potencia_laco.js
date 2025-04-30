//Exercicío 3
const readline = require('readline-sync');
let i = 2;
let base;
let expoente;
let potencia;

base = (readline.question('|Caculo de Potencia por Laco|\nDigite a base: \n')); 
expoente = (readline.question('Digite o expoente: \n'));
potencia = base;
while (i <= expoente) 
{
    base = base * potencia;
    i++;
}

console.log('Resultado da potencia: ', base);
//Exercício 9
const readline = require('readline-sync');
let desejada;
let i;
let termo1 = 1;
let termo2 = 1;
let ptermo;

desejada = (readline.question('|Serie de Fibonacci|\n Quantidade desejada: '));

console.log('A sequencia sera:\n');
console.log(termo1);
console.log(termo2);
console.log('1.618');

for(i = 5; i <= desejada; i++)
{
    ptermo = termo1 + termo2;
    termo1 = termo2;
    termo2 = ptermo;
    console.log(ptermo);
    ptermo = termo1 + termo2;
    termo1 = termo2;
    termo2 = ptermo;
    console.log(ptermo);
    console.log('1.618');
}
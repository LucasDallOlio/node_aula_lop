//Exercício 8
const readline = require('readline-sync');
let desejada;
let i;
let termo1 = 0;
let termo2 = 1;
let ptermo;

desejada = (readline.question('|Serie de Fibonacci|\n Quantidade desejada: '));

console.log('A sequencia será:\n');	
console.log(termo1);
console.log(termo2);

for(i = 3; i <= desejada; i++)
{
    ptermo = termo1 + termo2;
    console.log(ptermo, ' ');

    termo1 = termo2;
    termo2 = ptermo;
}

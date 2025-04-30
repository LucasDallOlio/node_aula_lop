//Exercicío 7
const readline = require('readline-sync');
let numero;
let atual = 1;
let fatorial = 1;

numero = (readline.question('|Calculo Fatorial|\nDigite um N: '));

while (atual <= numero)
{
	fatorial = fatorial * atual;
	atual = atual + 1;
}

console.log('O fatorial de ', numero, 'e', fatorial, '\n');	



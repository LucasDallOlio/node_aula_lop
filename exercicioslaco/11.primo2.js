//Exercicío 11
const readline = require('readline-sync');
let numero;
let contador = 0;
let i = 1;
let divisivel;

numero = (readline.question('|Verificador de N Primo|\nDigite um N maior que 1: \n'));

while (numero <= 1)
{
    numero = (readline.question('Digite um numero maior que 1: '));
}

while (i <= numero) 
{
    if(numero % i == 0)
    {
        contador++;
    }
    if(contador == 2 && numero % i == 0)
    {
        divisivel = i;
    }
    i++;
}

if(contador > 2)
{
    console.log('O ', numero, ' nao e um numero primo. O primeiro numero divisivel e: ', divisivel)
}
else
{
    console.log('O ', numero, ' e um numero primo.')
}
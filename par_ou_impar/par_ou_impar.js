const readline = require('readline-sync');
//
const num = Number(readline.question('Informe um número qualquer: '));

if(num % 2 == 0)
{
    console.log('Seu número é par')
}
else
{
    console.log('Seu número é impar')
}


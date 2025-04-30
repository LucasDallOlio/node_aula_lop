//Exercicío 13
const readline = require('readline-sync');
let numero = 2;
let contador = 0;
let i = 1;
let x = 1;
let primo;
let variavel;

variavel = (readline.question('|Amostragem de N Primo|\nDigite um N: \n'));
  
while (variavel <= 0)
{
    variavel = (readline.question('Digite um numero maior que 0: '));
}
  
while (x <= variavel) 
{
    if(numero % i == 0)
    {
        contador++;
    }
    i++;
  
    if(contador == 2 && i < numero) // Nao Primo
    {
        numero++;
        contador = 0;
        i = 1;
    }
    if(contador == 2 ) // Primo
    {
        primo = numero;
        console.log('\n', primo);
        x++;
        numero++;
        contador = 0;
        i = 1;
    }
}
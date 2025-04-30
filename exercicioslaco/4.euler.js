//Exercicío 4
const readline = require('readline-sync');
let valor;
let euler;
  
valor = (readline.question('Calculo de Euler\nDigite um N positivo: ')); 

while(valor <= 0)
{
    valor = (readline.question('Informe um N positivo: ')); 
}

if(valor > 0)
{
    euler = ((1/valor)+1)**valor;
    console.log(euler);
} 

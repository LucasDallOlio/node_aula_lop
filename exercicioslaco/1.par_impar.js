//Exercicío 1
const readline = require('readline-sync');
let numero;
let resto;
let decisao = 'S';

  while(decisao != 'N')
  {
    numero = (readline.question('|Verificador de Par ou Impar|\nInforme o numero:'));
    resto = numero%2;

    if(resto == 0)
    {
        console.log('Seu Numero e Par');
    }
    else
    {
        console.log('Seu Numero e Impar');
    }

    decisao = (readline.question('\nDeseja refazer o teste?(S/N)\n'));
  }
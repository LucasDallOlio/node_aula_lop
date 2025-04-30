//Exercicío 5
const readline = require('readline-sync');
let valor;
let euler;
let decisao = 'S';

valor = (readline.question('Calculo de Euler\nDigite um N positivo: '));

while(decisao != 'N')
{
    while(valor < 0)
    {
        valor = (readline.question('Informe um N positivo: '));
    }
    
    while(valor > 0 && decisao != 'N')
    {
        euler = ((1/valor)+1)**valor;
        console.log('O valor calculado do Euler e: ', euler);
        decisao = (readline.question('\nDeseja continuar a calcular?(S/N)\n'));
      
        if(decisao == 'N')
        {
            break;
        }

        valor = (readline.question('Calculo de Euler\nDigite um N positivo: '));
    }
  }
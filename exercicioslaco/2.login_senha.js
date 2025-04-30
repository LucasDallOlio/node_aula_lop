//Exercício 2
const readline = require('readline-sync');
const login = "lucasgato";
const senha = "123";
let login1;
let senha1;
let i = 2;

login1 = (readline.question('|Minha Casa Minha Vida|\n Login: '));
senha1 = (readline.question('\n Senha: '));

while(i <= 3)
{
    if(login == login1 && senha == senha1)
    {
        console.log('Boas-Vindas Beneficiário', login);
        break;
    }
    else
    {
        login1 = (readline.question('Login ou senha incorreto, tente novamente.\n Login: '));
        senha1 = (readline.question('\n Senha: '));
        i++;
    }
}



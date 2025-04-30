const anoNascimento = 2000;

console.log("Sua idade é: ", 2025 - anoNascimento);

{
    var cpf = '123.456.789-4';
}

console.log('CPF: ', cpf);

let nome = 'juca';
let peso = 68;
let altura = 1.55;
let ehCasado = true;

console.log(typeof nome);
console.log(typeof peso);
console.log(typeof altura);
console.log(typeof ehCasado);


/////////////////////////////////////////////////////////////////////////

//para instalar uma lib em node usamos o npm( Node Package Manager ), neste caso o comando no terminal é: npm i readline-sync
const readline = require('readline-sync');
const nomee = readline.question('Qual o seu nome? ');
console.log('Seja bem-vindo(a) ', nomee);

/////////////////////////////////////////////////////////////////////////

const pesoo = Number(readline.question('Seu peso?'));
console.log(typeof pesoo);

console.log(pesoo + 100);
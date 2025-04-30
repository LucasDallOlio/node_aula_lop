const readline = require('readline-sync');

const preco = Number(readline.question('Informe o preco do produto:'));
console.log('Preco final com desconto de 10%: R$',preco-(preco*0.1));
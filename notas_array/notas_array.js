const readline = require('readline-sync');
let i
let notas = [];
let soma = 0;

for(i = 0; i <= 4; i++)
{
    notas.push (Number(readline.question(`Digite a nota ${i+1} do aluno: `)));
    soma += notas[i];
}

notas.sort((a, b) => a - b);
console.log(notas);

const media = soma / notas.length;

menor = notas[0];
maior = notas[notas.length - 1];

console.log('Menor nota: ', menor,'\nMaior nota: ', maior);

console.log('Media do Aluno: ', media);

if(media >= 70)
{
    console.log('APROVADO');
}
else
{
    console.log('REPROVADO');
}

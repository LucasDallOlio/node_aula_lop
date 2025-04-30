/*const notas = {'mat' : 10, 'bio' : 5, 'geo' : 8, 'ing' : 7};

notas.mat.sort((a, b) => a-b);

console.log(notas);

console.log(notas['mat']);
*/
/*
const notas = {'juca' : {'mat' : 10, 'geo' : 8}};
console.log(notas['juca']['geo']);
*/

const notas = {'mat' : 10, 'geo' : 8, 'eco': 4};
for (let chave in notas)
{
    console.log(chave, '=>', notas[chave]);
}
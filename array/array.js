/*const nomes = ["Maria", "Joaquim", "Juca"];
const notas = [10, 5, 7, 9];

console.log(nomes);
console.log(notas);

console.log(nomes[0]);

nomes[0] = "Ana";

console.log(nomes[0]);
*/

/*
const nomes = [];

console.log(nomes);

nomes.push("Joca", "Asdrubal", "Phelipe", "Maria");

console.log(nomes);

nomes.pop();

nomes.sort();

console.log(nomes);

nomes.reverse();

console.log(nomes);

nomes.splice(1, 0, "Maria");

console.log(nomes);
*/

/*
const nomes = [];
nomes.push("Joca", "Asdrubal", "Phelipe", "Maria");
nomes.splice(1, 1, );
console.log(nomes);
*/

/*
const nums = [100, 10 , 11, 333, 111, 0];

console.log(nums);

nums.sort((a, b) => a - b);

console.log(nums);
*/

const paises = ['ar', 'br', 'jp', 'es', 'it'];

for(let index in paises)
{
    console.log(Number(index) + 1, "º pais =>", paises[index]);
}
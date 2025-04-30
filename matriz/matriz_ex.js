const m1 = [[-5, 8, 0], [3, 7, 10], [1, -8, 2]];
const m2 = [[5, 7, 4], [-1, -1, -1], [0, 10, 9]];
let m3 = [[], [], []];

for(let linha = 0; linha < 3; linha++)
{
    for (let coluna = 0; coluna < 3; coluna++)
    {
        m3[linha][coluna] = m1[linha][coluna] + m2[linha][coluna];
    }
}
console.table(m3);
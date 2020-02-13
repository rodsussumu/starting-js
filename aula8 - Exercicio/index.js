let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varAT = varA;
varA = varB;
varB = varC;
varC = varAT;

console.log(varA, varB, varC);
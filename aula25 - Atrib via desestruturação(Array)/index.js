const pessoa = {
    nome: 'rodrigo',
    sobrenome: 'tanaka',
    idade: 19,
    endereco: {
        rua: 'oriente',
        numero: 919,
    }
};
// Atribuição via desestruturação
// const {nome, sobrenome, idade} = pessoa;
const {endereco: {rua: r, numero}, endereco} = pessoa;
console.log(r, numero, endereco);
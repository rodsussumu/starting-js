const frutas = ['uva', 'banana', 'kiwi'];
// for(let i = 0; i < frutas.length ; i++) {
//     console.log(frutas[i]);
// }
// For in 
for(let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Rodrigo',
    idade: '19'
}
// console.log(pessoa.nome);  Diferentes maneiras de visualizar um atributo do objeto
// console.log(pessoa['nome']);
for(let chave in pessoa) {
    console.log(chave, pessoa[chave])
}
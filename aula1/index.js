console.log('Hello World'); // String
console.log(35, 15.85, 'Rodrigo Tanaka'); // Number
console.log('Meu nome é "Rodrigo". Estou aprendendo javascript as', 10 ,'da noite.')


var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = () => console.log("Valor: " + i);
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}

var funcs = [];
for (let i = 0; i < 3; i++) {
    funcs[i] = () => console.log("Valor: " + i);
}
for (let j = 0; j < 3; j++) {
    funcs[j]();
}

console.log(i);
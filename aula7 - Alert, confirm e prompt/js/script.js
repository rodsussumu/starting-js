// alert('Com a nossa mensagem');
// window.confirm('Deseja apagar?');
// prompt('Digite seu nome');

let num1 = prompt("Digite um número");
let num2 = prompt("Digite o segundo número");
// let resultado = parseInt(num1) + parseInt(num2);  Minha versão
// alert("O resultado da soma é " + resultado); Minha Versão
num1 = Number(num1);
num2 = Number(num2);
let resultado = num1 + num2
alert("O resultado da soma é " + resultado);
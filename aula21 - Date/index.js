// const data = new Date();
// console.log(data.toString());

// const tresHoras = 60 * 60 * 3 * 1000;

// const data2 = new Date(2019, 3, 20, 15, 14, 27 );
// console.log(data2.toString()); // ano , mes, dia, hora, minuto, segundo, milisegundo

// console.log('dia', data.getDate());
// console.log('mes', data.getMonth()); // Começa do 0, entao janeiro = 0 / dezembro = 11
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('minuto', data.getMinutes());
// console.log('segundo', data.getSeconds());
// console.log('dia da semana', data.getDay()); // Começa do 0, entao domingo = 0 / sabado = 6

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);








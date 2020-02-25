// function retornaMaior(num1, num2) {
//     if(num1 > num2) {
//         return "Número 1 é maior"
//     } else if (num1 < num2) {
//         return "Número 2 é maior"
//     } else {
//         return "Números iguais"
//     }
// }

// console.log(retornaMaior(1, 1));

function retornaMaior(x, y) {
    return x > y ? x : y
}

const max = (x, y) => x > y ? x : y;
console.log(max(3, 2))
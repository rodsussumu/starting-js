// Está é a minha Resolução comentada
// const h1 = document.querySelector('.container h1');
// h1.innerHTML = 'Apenas isso';

// const data = new Date();

// function findMonth(mesAtual) {
//     let mesAtualTexto;
//     switch(mesAtual) {
//         case 0 : mesAtualTexto = 'Janeiro'; return mesAtualTexto;
//         case 1 : mesAtualTexto = 'Fevereiro'; return mesAtualTexto;
//         case 2 : mesAtualTexto = 'Março'; return mesAtualTexto;
//         case 3 : mesAtualTexto = 'Abril'; return mesAtualTexto;
//         case 4 : mesAtualTexto = 'Maio'; return mesAtualTexto;
//         case 5 : mesAtualTexto = 'Junho'; return mesAtualTexto;
//         case 6 : mesAtualTexto = 'Julho'; return mesAtualTexto;
//         case 7 : mesAtualTexto = 'Agosto'; return mesAtualTexto;
//         case 8 : mesAtualTexto = 'Setembro'; return mesAtualTexto;
//         case 9 : mesAtualTexto = 'Outubro'; return mesAtualTexto;
//         case 10 : mesAtualTexto = 'Novembro'; return mesAtualTexto;
//         case 11 : mesAtualTexto = 'Dezembro'; return mesAtualTexto;
//         default : mesAtualTexto = ''; return mesAtualTexto;
//     }
//     return findMonth();
// }

// function findDay(diaSemana) {
//     let diaSemanaTexto;
//     switch(diaSemana) {
//         case 0: diaSemanaTexto = 'Domingo'; return diaSemanaTexto;
//         case 1: diaSemanaTexto = 'Segunda'; return diaSemanaTexto;
//         case 2: diaSemanaTexto = 'Terça'; return diaSemanaTexto;
//         case 3: diaSemanaTexto = 'Quarta'; return diaSemanaTexto;
//         case 4: diaSemanaTexto = 'Quinta'; return diaSemanaTexto;
//         case 5: diaSemanaTexto = 'Sexta'; return diaSemanaTexto;
//         case 6: diaSemanaTexto = 'Sabado'; return diaSemanaTexto;
//         default: diaSemanaTexto = ''; break;
//     }
// }

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// let mes = findMonth(data.getMonth())
// let diaSemana = findDay(data.getDay());
// let dia = data.getDate();
// let ano = data.getFullYear();
// let hora = zeroEsquerda(data.getHours());
// let minuto = data.getMinutes();
// h1.innerHTML = `${diaSemana} ,${dia} de ${mes} de ${ano} ${hora}:${minuto}`;

//********************************************************************************** */
 const h1 = document.querySelector('.container h1');
 const data = new Date();
 h1.innerHTML = data.toLocaleDateString("pt-BR", {dateStyle: 'full',timeStyle: 'short'});
//*********************************************************************************  */
//Troca dos switchs por arrays
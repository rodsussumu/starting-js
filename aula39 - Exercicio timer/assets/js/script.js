function getTimeFromSecond(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');
let segundos = 0;
let timer;

function startClock() {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = getTimeFromSecond(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('iniciar')) {
        clearInterval(timer);
        startClock();
        relogio.classList.remove('pausado')
    } else if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    } else if (el.classList.contains('reiniciar')) {
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        segundos = 0;
        relogio.classList.add('pausado');
    }
})

// iniciar.addEventListener('click', function(event){
//     clearInterval(timer);
//     startClock();
//     relogio.classList.remove('pausado')
// })

// pausar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// })

// reiniciar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.innerHTML = "00:00:00";
//     segundos = 0;
//     relogio.classList.add('pausado');
// })
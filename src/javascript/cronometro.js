const botreiniciar = document.getElementById('reiniciar')
const botplay = document.getElementById('play')
const botmarcar = document.getElementById('marcar')
const ttcron = document.getElementById('ttcron')
const localmarc = document.getElementById('marctime')

let timer = 0
let marcs = []
let interv

const format = (time) => {
    const horas = Math.floor(time / 36000)
    const minutos = Math.floor((time % 36000) / 6000)
    const segundos = Math.floor((time % 6000) / 100)
    const microS = time % 100

    return (`${horas.toString().padStart(2, '0')}: ${minutos.toString().padStart(2, '0')}: ${segundos.toString().padStart(2, '0')}: ${microS.toString().padStart(2, '0')}`)
}

const marcf = (array, timee) => {
    localmarc.innerHTML += `<p>MARC ${array}  ${format(timee)}</p>`
}

const marca = () => {
    if (timer > 0) {
        marcs.push(timer)
        marcf(marcs.length, timer)
    }
}

const contar = () => {
    const play = document.getElementById('play')
    const act = play.getAttribute('data-action')
    
    clearInterval(interv)

    if (act == 'start' || act == 'continue') {
        
        interv = setInterval(() => {
            timer += 1
            mostrar(timer)
        }, 10);

        play.innerHTML = '<i  class="fa-solid fa-pause"></i>'
        play.setAttribute('data-action', 'pause')

    } else {
        play.setAttribute('data-action', 'continue')
        play.innerHTML = '<i  class="fa-solid fa-play"></i>'
    }
}

const mostrar = (time) => {
    ttcron.textContent = format(time)
}

const reini = () => {
    clearInterval(interv)
    timer = 0
    mostrar(timer)
    marcs = []
    botplay.innerHTML = '<i  class="fa-solid fa-play"></i>'
    botplay.setAttribute('data-action', 'start')
    localmarc.innerHTML = ''
}

botplay.addEventListener('click', contar)
botmarcar.addEventListener('click', marca)
botreiniciar.addEventListener('click', reini)
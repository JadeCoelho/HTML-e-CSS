let hr = min = seg = ms = '0' + 0, timeir

const botaoir = document.querySelector('.ir')
const botaoparar = document.querySelector('.parar')
const botaoreiniciar = document.querySelector('.reiniciar')
botaoir.addEventListener('click', ir)
botaoparar.addEventListener('click', parar)
botaoreiniciar.addEventListener('click', reiniciar)

function ir() {
    botaoir.classList.add('active')
    botaoparar.classList.remove('stopActive')
    timeir = setInterval(() => {
        ms++
        ms = ms < 10 ? '0' + ms : ms

        if (ms == 100) {
            seg++
            seg = seg < 10 ? '0' + seg : seg
            ms = '0' + 0
        }

        if (seg == 60) {
            min++
            min = min < 10 ? '0' + min : min
            seg = '0' + 0
        }

        if (min == 60) {
            hr++
            hr = hr < 10 ? '0' + hr : hr
            min = '0' + 0
        }

        botarvalor()
        
    }, 10); //1000ms = 1s

}

function parar() {
    botaoir.classList.remove('active')
    botaoparar.classList.add('stopActive')
    clearInterval(timeir)
}

function reiniciar() {
    botaoir.classList.remove('active')
    botaoparar.classList.remove('stopActive')
    clearInterval(timeir)
    hr = min = seg = ms = '0' + 0
    botarvalor()
}

function botarvalor() {
    document.querySelector('.milisegundo').innerText = ms
    document.querySelector('.segundo').innerText = seg
    document.querySelector('.minuto').innerText = min
    document.querySelector('.hora').innerText = hr
}
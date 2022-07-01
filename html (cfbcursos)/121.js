var video = document.getElementById('video')
var botao = document.getElementById('pausa')

function pausar(){
    if (video.paused){
        video.play()
        botao.innerHTML='Pausa'
    } else {
        video.pause()
        botao.innerHTML='Play'
    }
}
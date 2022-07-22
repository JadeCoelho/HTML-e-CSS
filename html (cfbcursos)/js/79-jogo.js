var diryj,dirxj,jogo,frames,jog,velj,pxj,pyj,tamw,tamh,velt

function tecladown(){
    var tecla = event.keyCode;
    if (tecla == 38){ //cima
        diryj = -1;
    }else if (tecla ==40){ //baixo
        diryj = 1;
    }else if (tecla ==37){ //esquerda
        dirxj = -1;
    }else if (tecla ==39){ //direita
        dirxj = 1;
    }
    if (tecla == 32){ //espaço
        atira(pxj+48,pyj)
    }
}
function teclaup(){
    var tecla = event.keyCode
    if ((tecla == 38) || (tecla == 40)){
        diryj = 0;
    }else if ((tecla == 37) || (tecla == 39)){
        dirxj = 0;
    }
}

function atira(x,y){
    var t = document.createElement('div')
    var att1 = document.createAttribute('class')
    var att2 = document.createAttribute('style')
    att1.value="tiroJog"
    att2.value="top: "+ y + "px; left: "+ x + "px"
    t.setAttributeNode(att1)
    t.setAttributeNode(att2)
    document.body.appendChild(t)
}

function controlatiros(){
    var tiros = document.getElementsByClassName('tiroJog');
    var tam = tiros.length;
    for(var i=0; i<tam;i++){
        if(tiros[i]){
            var pt = tiros[i].offsetTop
            pt -= velt
            tiros[i].style.top=pt+"px"
            if(pt<0){
               // document.body.removeChild(tiros[i])
               tiros[i].remove()
            }
        }
    }
}

function controlajog(){
    pyj+=diryj*velj
    pxj+=dirxj*velj
    jog.style.top = pyj+"px"
    jog.style.left = pxj+"px"
}
function gameloop(){
    if(jogo){
        //funções de controle
        controlajog()
        controlatiros()
    }
    frames=requestAnimationFrame(gameloop)
}

function inicia(){
    jogo=true

    //ini tela
    tamh=window.innerHeight
    tamw=window.innerWidth

    //ini jogador
    dirxj = diryj = 0
    pxj = tamw/2
    pyj = tamh/2
    velj = velt = 5
    jog = document.getElementById("naveJog")
    jog.style.top = pyj+"px"
    jog.style.left = pxj+"px"

    gameloop()



}

window.addEventListener("load",inicia)




document.addEventListener("keydown",tecladown)
document.addEventListener("keyup",teclaup)
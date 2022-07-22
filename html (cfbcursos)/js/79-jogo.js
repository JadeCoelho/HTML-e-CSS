var diryj,dirxj,jogo,frames,jog,velj,pxj,pyj,tamw,tamh,velt,contb,painelcontb,bombastotal,velb,vidaplaneta,tempb,indiceexplosao,barraplaneta,telamsg

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

function criabombas(){
    if(jogo){
        var y = 0
        var x = Math.random()*tamw
        var bomba = document.createElement('div')
        var attb = document.createAttribute('class')
        var attb2 = document.createAttribute('style')
        attb.value = "bomba"
        attb2.value = "top: "+y+" px; left: "+x+"px"
        bomba.setAttributeNode(attb)
        bomba.setAttributeNode(attb2)
        document.body.appendChild(bomba)
        contb--
    }
}

function controlabomba(){
    bombastotal = document.getElementsByClassName('bomba')
    var tam = bombastotal.length
    for(var i=0;i<tam;i++){
        if(bombastotal[i]){
            var pi = bombastotal[i].offsetTop
            pi+=velb
            bombastotal[i].style.top=pi+"px"
            if(pi>tamh){
                vidaplaneta-=10
                criaexplosao(2,bombastotal[i].offsetLeft,null)
                bombastotal[i].remove()
            }
        }
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
            colisaotb(tiros[i])
            if(pt<0){
               // document.body.removeChild(tiros[i])
               tiros[i].remove()
            }
        }
    }
}

function colisaotb(tiro){
    var tam = bombastotal.length
    for(var i=0; i<tam;i++){
        if(bombastotal[i]){
            if(((tiro.offsetTop<=(bombastotal[i].offsetTop+59))&&((tiro.offsetTop+6)>=(bombastotal[i].offsetTop))) 
            //cima tiro com baixo bomba e baixo tiro com cima bomba
                &&
                ((tiro.offsetLeft<=(bombastotal[i].offsetLeft+31))&&(tiro.offsetLeft+6>=(bombastotal[i].offsetLeft))) 
                //esquerda tiro com direita bomba e direita tiro com esquerda bomba
                ){
                    criaexplosao(1,bombastotal[i].offsetLeft-25,bombastotal[i].offsetTop)
                    bombastotal[i].remove()
                    tiro.remove()
            }
        }
    }

}

function criaexplosao(tipo,x,y){ //tipo 1 = ar, tipo 2 = chao
    if(document.getElementById('explosao'+(indiceexplosao-2))){
        document.getElementById('explosao'+(indiceexplosao-2)).remove()
    }
    var explosao=document.createElement('div')
    var img = document.createElement('img')
    //atributos pra div
    var atte = document.createAttribute('class')
    var atte2 = document.createAttribute('style')
    var atte3 = document.createAttribute('id')

     //atributos pra img
     var atte4 = document.createAttribute('src')

     atte3.value="explosao"+indiceexplosao

     if (tipo==1){
        atte.value="explosaoAr"
        atte2.value="top: "+y+"px;left: "+x+"px;"
        atte4.value = "explodear.gif?"+new Date()
        
     } else {
        atte.value="explosaochao"
        atte2.value="top: "+(tamh-57)+"px;left: "+(x-17)+"px;"
        atte4.value = "explodechao.gif?"+new Date()
     }
     explosao.setAttributeNode(atte)
     explosao.setAttributeNode(atte2)
     explosao.setAttributeNode(atte3)
     img.setAttributeNode(atte4)
     explosao.appendChild(img)
     document.body.appendChild(explosao)

     indiceexplosao++

     }
   

function controlajog(){
    pyj+=diryj*velj
    pxj+=dirxj*velj
    jog.style.top = pyj+"px"
    jog.style.left = pxj+"px"
}

function gerenciagame(){
    barraplaneta.style.width=vidaplaneta+"px"
    if(contb<=0){
        jogo=false
        clearInterval(tempb)
        telamsg.style.backgroundImage="url('vitoria.png')"
        telamsg.style.display="block"
    }
    if(vidaplaneta<=0){
        jogo=false
        clearInterval(tempb)
        telamsg.style.backgroundImage="url('derrota.png')"
        telamsg.style.backgroundRepeat="no-repeat"
        telamsg.style.display="block"
    }
}

function gameloop(){
    if(jogo){
        //funções de controle
        controlajog()
        controlatiros()
        controlabomba()
    }
    gerenciagame()
    frames=requestAnimationFrame(gameloop)
}

function reinicia(){
    bombastotal = document.getElementsByClassName('bomba')
    var tam = bombastotal.length
    for(var i=0;i<tam;i++){
        if(bombastotal[i]){
            bombastotal[i].remove()
        }
    }

    telamsg.style.display="none"
    clearInterval(tempb)
    cancelAnimationFrame(frames)
    vidaplaneta=300
    pxj=tamw/2
    pyj=tamh/2
    jog.style.top=pyj+"px"
    jog.style.left=pxj+"px"
    contb=150
    jogo=true
    tempb = setInterval(criabombas,1800)
    gameloop()
}

function inicia(){
    jogo=false

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

    

    //controles das bombas
   
    contb = 150
    velb = 3
    

    vidaplaneta = 300
    barraplaneta = document.getElementById('barraPlaneta')
    barraplaneta.style.width = vidaplaneta + "px"

    indiceexplosao = 0

    telamsg = document.getElementById('telaMsg')
    telamsg.style.backgroundImage="url('intro.jpeg')"
    telamsg.style.display="block"
    document.getElementById('btnJogar').addEventListener("click",reinicia)

   



}

window.addEventListener("load",inicia)
document.addEventListener("keydown",tecladown)
document.addEventListener("keyup",teclaup)
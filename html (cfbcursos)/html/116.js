function gerenciar(c) {
    var x,i
    x = document.getElementsByClassName('img')
    for(i=0;i<x.length;i++){
        x[i].style.display='none'
    }
    if(c=='tudo') {
        for(i=0;i<x.length;i++){
            x[i].style.display='block'
        }
    } else {
        x=document.getElementsByClassName(c)
        for(i=0;i<x.length;i++){
            x[i].style.display='block'
        }
    }
}

var botoes = document.getElementsByClassName('botao')
    for(i=0;i<botoes.length;i++){
    botoes[i].addEventListener('click', function(){
        var atual = document.getElementsByClassName('ativo')[0]
        atual.className=atual.className.replace('ativo', '')
        this.className+=' ativo'
    
    })
}

gerenciar('tudo');




function leiamais(){
   var pontos = document.getElementById('pontos')
   var maistexto = document.getElementById('mais')
   var botaomais = document.getElementById('leiamais')

   if (pontos.style.display==='none'){
    pontos.style.display='inline'
    maistexto.style.display='none'
    botaomais.innerHTML='Leia Mais'
   } else {
    pontos.style.display='none'
    maistexto.style.display='inline'
    botaomais.innerHTML='Leia Menos'
   }
}




var caixa = document.getElementById('caixa')
var alerta = document.getElementById('alerta')
caixa.addEventListener('keyup', function(event){
    if(event.getModifierState('CapsLock')) {
        alerta.style.display='block'
    } else {
        alerta.style.display='none'
    }
})




function mostrarOcultar(){
    var senha = document.getElementById('senha')
    if(senha.type=='password') {
    senha.type='text'
    } else {
        senha.type='password'
    }
}
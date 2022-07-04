const elementos=document.querySelectorAll('[data-anima]')
const animacaoClass='animacao'

function animaScroll() {
    const topojanela=window.pageYOffset+((window.innerHeight*3)/4) // 3/4 da janela
    elementos.forEach(function (elemento){
        if(topojanela > elemento.offsetTop) {
            elemento.classList.add(animacaoClass)
        } else {
            elemento.classList.remove(animacaoClass)
        }
    })
}

if (elementos.length) {
    window.addEventListener('scroll', function() { 
        animaScroll()
     })
        
  
}

function cliquemodal (img) {
    const janelamodal=document.getElementById('janelamodal')
    const imgmodal=document.getElementById('imgmodal')
    const tmodal=document.getElementById('txtmodal')
    const xmodal=document.getElementById('fechar')

    janelamodal.classList.remove('escondejanela')
    janelamodal.classList.add('mostrajanela')

    imgmodal.src=img.src
    imgmodal.alt=img.alt
    tmodal.innerHTML=img.alt

    xmodal.onclick=function() {
        janelamodal.classList.add('escondejanela')
        janelamodal.classList.remove('mostrajanela')

    }

}

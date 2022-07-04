function abretab(evt,nometab) {
    const conteudo=document.getElementsByClassName('conteudo')
    for (var i=0; i < conteudo.length;i++) {
        conteudo[i].style.display='none'
    }
    const btab=document.querySelectorAll('[data-btab]')
    for (var i=0; i < btab.length;i++) {
        btab[i].classList.remove('active')
    }

    document.getElementById(nometab).style.display="block"
    evt.currentTarget.classList.add('active')
}

document.getElementById('primeiro').click()
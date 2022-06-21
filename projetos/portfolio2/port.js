const trocarModo = document.getElementById('trocar')
const interior = document.getElementById('interior')
modo.onclick = function(){
    document.body.classList.toggle('modo-escuro')
    trocarModo.classList.toggle('trocar-active')
    interior.classList.toggle('interior-active')
    if (document.body.classList.contains('modo-escuro')) {
        interior.innerHTML = 'Claro'
    } else {
        interior.innerHTML = 'Escuro'
    }
}
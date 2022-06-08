const menus=document.querySelectorAll('[data-menu]')
const cssativo='ativo'

menus.forEach(function(e) {
    e.addEventListener('click', function(){
        for(i=0; i < menus.length; i++){
            menus[i].classList.remove(cssativo)
        }
        e.classList.add(cssativo)
    })
})

const btnmenu=document.getElementsByClassName('btnmenu')[0]
const menu=document.getElementsByClassName('menu')[0]
btnmenu.addEventListener('click',function(){
    menu.classList.toggle('aberto')
})
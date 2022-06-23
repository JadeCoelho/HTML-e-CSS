const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('ul')
const menuItem = document.querySelectorAll('a')
const header = document.querySelector('.header.container')

hamburguer.addEventListener('click', () =>{
    hamburguer.classList.toggle('active')
    menu.classList.toggle('active')
})

document.addEventListener('scroll', () =>{
    var scrollPosition = window.scrollY
    if(scrollPosition > 250){
        header.style.backgroundColor = "#3a3a3a"
    } else {
        header.style.backgroundColor = "transparent"
    }
})

menuItem.forEach(item =>{
    item.addEventListener('click', () =>{
        hamburguer.classList.toggle('active')
        menu.classList.toggle('active')
    })
})
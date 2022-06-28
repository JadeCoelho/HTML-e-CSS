const nav = document.getElementsByTagName('nav')[0]
const topoNav = nav.offsetTop

window.onscroll = function(){
    fixarmenu()
}

function fixarmenu() {
    if (window.pageYOffset >= topoNav) {
    nav.classList.add('fixo')
} else {
    nav.classList.remove('fixo')
}
}

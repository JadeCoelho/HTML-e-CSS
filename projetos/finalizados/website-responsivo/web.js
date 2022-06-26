$(function(){
    $(document).scroll(function(){
        var $nav = $('.nav')
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
    })
})

var menu = document.getElementById('bar')
var itens = document.getElementById('navbar')

itens.style.right = "-360px"
menu.onclick = function() {
    if (itens.style.right == "-360px") {
        itens.style.right = "0"
    } else {
        itens.style.right = "-360px"
    }
}

function mostrarmenu(){
    document.getElementsByClassName('links')[0].classList.toggle('mostrarmenu');
}

window.onclick=function(event){
    if (!event.target.matches('.btnmenu')){
        var dropdowns = document.getElementsByClassName('links');
        var i;
        for (i=0;i<dropdowns.length;i++){
            var aberto=dropdowns[i];
            if (aberto.classList.contains('mostrarmenu')){
                aberto.classList.remove('mostrarmenu');
            }
        }
    }
}
var ordem = 1;
mostrarslide(ordem);

function mudarslide(o){
    mostrarslide(ordem += o);
}

function slideatual(o){
    mostrarslide(ordem = o);
}

function mostrarslide(o){
    var slides = document.getElementsByClassName('slide');
    var indicadores = document.getElementsByClassName('indicador');

    if (o > slides.length){
        ordem=1;
    }
    if (o < 1){
        ordem=slides.length;
    }
    for (var i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }
    for (var i=0;i<indicadores.length;i++){
        indicadores[i].className = indicadores[i].className.replace('ativo','');
    }
    slides[ordem-1].style.display = 'block';
    indicadores[ordem-1].className += ' ativo';
}

window.addEventListener("load",inicia)

var dv1 

function inicia(){
    dv1 = document.getElementById('dv1')

    dv1.addEventListener("mouseover",troca)
    dv1.addEventListener("mouseout",volta)

    dv2 = document.getElementById('dv2')

    dv2.addEventListener("mouseover",troca)
    dv2.addEventListener("mouseout",volta)

    dv3 = document.getElementById('dv3')

    dv3.addEventListener("mouseover",troca)
    dv3.addEventListener("mouseout",volta)


}

function troca(){
    var obj = event.target
    obj.style.backgroundImage="url(imgs/s3.jpg)"
}

function volta(){
    var obj = event.target
    obj.style.backgroundImage="url(imgs/s2.jpg)"
}

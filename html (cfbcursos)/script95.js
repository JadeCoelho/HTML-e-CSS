const acordeonarray=document.getElementsByClassName('acordeon')

for(var i=0; i<acordeonarray.length;i++){
    acordeonarray[i].addEventListener('click',function(){
        this.classList.toggle('selecionado')
        const painel=this.nextElementSibling
        if (painel.style.maxHeight){
            painel.style.maxHeight=null
        } else {
            painel.style.maxHeight=painel.scrollHeight+"px"
        }
    })
}
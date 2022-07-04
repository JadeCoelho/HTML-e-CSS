function pesquisar() {
    var input= document.getElementById('pesquisa')
    var filtro= input.value.toUpperCase()
    var menu= document.getElementById('menu')
    var menuitens= menu.getElementsByTagName('li')
  

    for(var i=0;i<menuitens.length;i++) {
        var links= menuitens[i].getElementsByTagName('a')[0]
        if (links.innerHTML.toUpperCase().indexOf(filtro)>-1) {
            menuitens[i].style.display=""
        } else {
            menuitens[i].style.display="none"
        }
    }
}
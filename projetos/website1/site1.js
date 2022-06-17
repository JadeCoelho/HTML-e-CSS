//ativar ou desativar caixa de cores
let iconescor = document.querySelector('.cores')
icones = document.querySelector('.icones')

icones.addEventListener('click', ()=>{
    iconescor.classList.toggle('open')
})


//pegando todos os botões
let botoes = document.querySelectorAll('.bt')
for (var button of botoes) {
    button.addEventListener('click', (e)=>{
        let target = e.target
        let open = document.querySelector('.open')
        if (open) open.classList.remove('open')
        document.querySelector('.active').classList.remove('active')
        target.classList.add('active')

        //mudar cores e modo claro ou escuro
        let root = document.querySelector(':root')
        let dataColor = target.getAttribute('data-color') //pegando o valor de data-color de botão clicado
        let color = dataColor.split(' ') // dividindo cada espaço de cor e fazendo deles um vetor
        root.style.setProperty('--claro', color[0])
        root.style.setProperty('--escuro', color[1])
        root.style.setProperty('--principal', color[2])
        root.style.setProperty('--mudar', color[3])
        root.style.setProperty('--fundo', color[4])

        let nomeicone = target.className.split(' ')[2]
        if(target.classList.contains('fa-moon-o')) {
            target.classList.replace(nomeicone, 'fa-sun-o')
            iconescor.style.display = 'none'
        } else if (target.classList.contains('fa-sun-o')){
            target.classList.replace('fa-sun-o', 'fa-moon-o')
            iconescor.style.display = 'block'
            document.querySelector('.bt.azul').click()
        }
        console.log(nomeicone)
    })
    
}

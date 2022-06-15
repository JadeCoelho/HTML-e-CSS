let sliderElement = document.querySelector('#slider')
let botaoElement = document.querySelector('#botao')

let tamanhoSenha = document.querySelector('#valor')
let senha = document.querySelector('#senha')

let containerSenha = document.querySelector('#container-senha')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*_"
let novaSenha = "";

tamanhoSenha.innerHTML = sliderElement.value;

slider.oninput = function() {
    tamanhoSenha.innerHTML = this.value
}

function gerarsenha() {
let pass = "";

for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n))
}
containerSenha.classList.remove('hide')
senha.innerHTML = pass
novaSenha = pass
}

function copiarsenha() {
    navigator.clipboard.writeText(novaSenha)
}
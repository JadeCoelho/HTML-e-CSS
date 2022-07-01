var i =0
var texto = 'Brincando com o efeito de digitação...'
var velocidade = 40

function digitando(){
    if (i<texto.length){
        document.getElementById('texto').innerHTML += texto.charAt(i)
        i++
        velocidade=Math.floor(Math.random()*150);0
        setTimeout(digitando,velocidade)
    }
}
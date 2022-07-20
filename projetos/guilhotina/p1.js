let tentativas = 6
let lista = []
let sorteionome;
let sorteiocategoria;

const palavras = [
    palavra001 = {
        nome: 'IRLANDA',
        categoria: 'PAÍS'
    },
    palavra002 = {
        nome: 'UZBEQUISTAO',
        categoria: 'PAÍS'
    },
    palavra003 = {
        nome: 'EGITO',
        categoria: 'PAÍS'
    },
    palavra004 = {
        nome: 'BANGLADESH',
        categoria: 'PAÍS'
    },
    palavra005 = {
        nome: 'COMORES',
        categoria: 'PAÍS'
    },
    palavra006 = {
        nome: 'RUANDA',
        categoria: 'PAÍS'
    },
    palavra007 = {
        nome: 'EQUADOR',
        categoria: 'PAÍS'
    },
    palavra008 = {
        nome: 'HONDURAS',
        categoria: 'PAÍS'
    },
    palavra009 = {
        nome: 'NICARAGUA',
        categoria: 'PAÍS'
    },
    palavra010 = {
        nome: 'MEXICO',
        categoria: 'PAÍS'
    },

    palavra011 = {
        nome: 'ALBATROZ',
        categoria: 'ANIMAL'
    },
    palavra012 = {
        nome: 'CUTIA',
        categoria: 'ANIMAL'
    },
    palavra013 = {
        nome: 'DODO',
        categoria: 'ANIMAL'
    },
    palavra014 = {
        nome: 'ESCARAVELHO',
        categoria: 'ANIMAL'
    },
    palavra015 = {
        nome: 'FURAO',
        categoria: 'ANIMAL'
    },
    palavra016 = {
        nome: 'GRILO',
        categoria: 'ANIMAL'
    },
    palavra017 = {
        nome: 'JEGUE',
        categoria: 'ANIMAL'
    },
    palavra018 = {
        nome: 'LINCE',
        categoria: 'ANIMAL'
    },
    palavra019 = {
        nome: 'OVELHA',
        categoria: 'ANIMAL'
    },
    palavra020 = {
        nome: 'RAPOSA',
        categoria: 'ANIMAL'
    },
    palavra021 = {
        nome:'BEXIGA',
        categoria:'PARTE DO CORPO HUMANO'
    },
    palavra022 = {
        nome:'EPIGLOTE',
        categoria:'PARTE DO CORPO HUMANO'
    },
    palavra023 = {
        nome:'FALANGE',
        categoria:'PARTE DO CORPO HUMANO'
    },
    palavra024 = {
        nome:'GENGIVA',
        categoria:'PARTE DO CORPO HUMANO'
    },
    palavra025 = {
        nome:'INTESTINO',
        categoria:'PARTE DO CORPO HUMANO'
    },
    palavra026 = {
        nome:'NADEGA',
        categoria:'PARTE DO CORPO HUMANO'
    },
    palavra027 = {
        nome:'OMBROS',
        categoria:'PARTE DO CORPO HUMANO'
    },
    palavra028 = {
        nome:'PUPILA',
        categoria:'PARTE DO CORPO HUMANO'
    },
     palavra029 = {
        nome:'TRAQUEIA',
        categoria:'PARTE DO CORPO HUMANO'
    },
    palavra030 = {
        nome:'UMBIGO',
        categoria:'PARTE DO CORPO HUMANO'
    }

]

palavrasecreta()

function palavrasecreta() {
    const indexpalavra = parseInt(Math.random() * palavras.length)
    sorteionome = palavras[indexpalavra].nome;
    sorteiocategoria = palavras[indexpalavra].categoria;
    console.log(indexpalavra)

    
}

palavranatela()

function palavranatela(){
    const categoria = document.getElementById('categoria')
    categoria.innerHTML = sorteiocategoria

    const tela = document.getElementById('palavra')
    tela.innerHTML = ''

    for(i=0; i < sorteionome.length;i++){
        if(lista[i]==undefined){
            lista[i] = '&nbsp;'
            tela.innerHTML = tela.innerHTML + "<div class='letras'>" + lista[i] + "</div>"
        } else {
        tela.innerHTML = tela.innerHTML + "<div class='letras'>" + lista[i] + "</div>"
    }

    }

}

function verifica(letra) {
    if (tentativas > 0) {
     mudarletra("tecla-" + letra) 
     comparalista(letra)
     palavranatela()
    }
    
}

function mudarletra(tecla){
    document.getElementById(tecla).style.background='black';
    document.getElementById(tecla).style.color='white';

}

function comparalista(letra) {
    const pos = sorteionome.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaimagem()
        //verificar se ainda há tentativas
    } else {
        for (i=0; i < sorteionome.length; i++) {
            if(sorteionome[i] == letra) {
                lista[i] = letra
            }
        }
    }

    let vitoria = true
    for (i=0; i < sorteionome.length; i++) {
        if(sorteionome[i] != lista[i]){
            vitoria = false
        }
    }
        if (vitoria == true) {
            //msg na tela
            tentativas = 0
        }

        function carregaimagem() {
            switch(tentativas){
                case 5:
                    document.getElementById('imagem').style.background = "url(img2.png)";
                break;
                case 4:
                        document.getElementById('imagem').style.background = 'url(img3.png)';
                break;
                case 3:
                            document.getElementById('imagem').style.background = 'url(img4.png`';
                break;
                case 2:
                document.getElementById('imagem').style.background = 'url(img5.png)';
                break;
                case 1:
                    document.getElementById('imagem').style.background = 'url(img6.png)';
                break;
                case 0:
                    document.getElementById('imagem').style.background = 'url(img7.png)';
                break;
                default:
                    document.getElementById('imagem').style.background = 'url(img1.png)';
                    break;


            }
        }
}
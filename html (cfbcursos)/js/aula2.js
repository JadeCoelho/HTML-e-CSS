var canal, nome, site;
canal = 'olá, mundo';
var num = 3;
document.write(canal);
document.write('<br>');
document.write(num);
document.write('<br>' + canal + '<br>' + num + '<br>');
var texto = canal + '<br>' + num + '<br>';
document.write(texto);
login = 'entrar';
document.write(login);
/*variáveis inválidas: variável iniciando por número, variável com &*/ 
num2 = 1000;
soma = '<br>' + canal + '<br>' + (num + num2);
document.write(soma);
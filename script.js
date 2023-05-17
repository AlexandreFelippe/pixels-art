//Exercicio 01
const h1 = document.createElement('h1');
h1.innerText = 'Paleta de Cores'
document.body.appendChild(h1)
const title = document.querySelector('h1');
title.id = 'title'
// Exercicio 02 - 2 - Adicione à página uma paleta contendo quatro cores distintas
//A página deve conter uma paleta com quatro opções de cores
function paletaDeCores (black, blue, red, green){
for (let index = 0; index < 5; index += 1) {
    index = paletaDeCores[index];
    console.log(paletaDeCores[index])
}}


//A paleta de cores deve ser um elemento com id denominado color-palette, e cada cor individual contida na paleta de cores deve possuir a classe chamada color;
//A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca;

//Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

//A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título Paleta de Cores;

//A paleta de cores não deve conter cores repetidas.

//O que será testado:

//A paleta de cores deve possuir o id color-palette;

//As cores individuais da paleta devem possuir a classe color;

//A cor de fundo de cada elemento da paleta é a cor que o elemento representa :warning: A única cor não permitida na paleta é a cor branca :warning:;

//Os elementos da paleta de cores devem ter borda preta, sólida e com 1 pixel de largura;

//As cores da paleta devem estar lado a lado;

//A paleta de cores deve estar posicionada abaixo do título Paleta de Cores;

//A paleta de cores não pode conter cores repetidas.
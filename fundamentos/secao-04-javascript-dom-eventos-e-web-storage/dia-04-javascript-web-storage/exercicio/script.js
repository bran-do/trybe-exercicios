/* Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito em que a pessoa usuária pode escolher as configurações da página.

As pessoas devem ter o poder de alterar:

Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte (Font family).

Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
*/

const body = document.body;

// 1 - Cor de fundo da tela;
const backgroundColorChange = (color) => {
    body.style.backgroundColor = color;
}

const btnBgColor = document.querySelectorAll('#background-color button');

for (let i = 0; i < btnBgColor.length; i += 1) {
    btnBgColor[i].addEventListener("click", () => {
        let colorSelected = event.target.innerText;
        backgroundColorChange(colorSelected);
    })
}

// 2 - Cor do texto;
const fontColorChange = (color) => {
    body.style.color = color;
}

const btnFontColor = document.querySelectorAll('#font-color button');

for (let i = 0; i < btnFontColor.length; i += 1) {
    btnFontColor[i].addEventListener("click", () => {
        let colorSelected = event.target.innerText;
        fontColorChange(colorSelected);
    })
}

// 3 - Tamanho da fonte
const fontSizeChange = (size) => {
    body.style.fontSize = size;
}

const btnFontSize = document.querySelectorAll('#font-size button');

for (let i = 0; i < btnFontSize.length; i += 1) {
    btnFontSize[i].addEventListener("click", () => {
        let sizeSeletced = event.target.innerText;
        fontSizeChange(sizeSeletced);
    })
}
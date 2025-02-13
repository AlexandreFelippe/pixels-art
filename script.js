// 3
const colorPallete = document.getElementById('color-palette');
const color = document.getElementsByClassName('color');
const btn = document.getElementById('button-random-color');
const bigPixel = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');

function buttons() {
  const cores = ['black', 'white', 'blue', 'red', 'green', 'orange',
    'pink', 'yellow', 'purple', 'brown', 'grey', 'white'];
  for (let index = 0; index < 10; index += 1) {
    const button = document.createElement('div');
    button.style.backgroundColor = cores[index];
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.border = '1px solid black';
    button.className = 'color';
    colorPallete.className = 'color-palette';
    colorPallete.appendChild(button);
  }
  return buttons;
}
buttons();

// 4
function coresRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
function clickCoresAleatorias() {
  for (let index = 1; index <= 10; index += 1) {
    color[index].style.backgroundColor = coresRGB();
  }
}
btn.addEventListener('click', clickCoresAleatorias);
// 5

function storagePallete() {
  const palette = [];
  for (let index = 0; index < color.length; index += 1) {
    palette.push(color[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(palette));
}
btn.addEventListener('click', storagePallete);
function getPallete() {
  const coresStorage = localStorage.getItem('colorPalette');
  const json = JSON.parse(coresStorage);
  if (json) {
    for (let index = 0; index < color.length; index += 1) {
      color[index].style.backgroundColor = json[index];
    }
  }
}
getPallete();
// 6
const pixelsBoard = () => {
  bigPixel.style.width = '1100px';
  for (let index = 0; index < 20; index += 1) {
    for (let i = 0; i < 20; i += 1) {
      const pixel1 = document.createElement('div');
      pixel1.className = 'pixel';
      pixel1.style.display = 'inline-block';
      pixel1.style.border = 'solid black 1px';
      pixel1.style.background = 'white';
      pixel1.style.height = '20px';
      pixel1.style.width = '20px';
      pixel1.style.borderRadius = '50px';
      bigPixel.appendChild(pixel1);
    }
  }
};
pixelsBoard();

// 9
const changeSelect = () => {
  color[0].classList.add('selected');
  color[1].classList.add('selected');
  colorPallete.addEventListener('click', (event) => {
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
};
changeSelect();
// 10
const selectedColors = () => document.querySelector('.selected').style.backgroundColor;
selectedColors();
const paintPixels = () => {
  const paintPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < paintPixel.length; index += 1) {
    paintPixel[index].addEventListener('click', (e) => {
      e.target.style.backgroundColor = selectedColors();
    });
  }
};
paintPixels();
// 11
const button = document.getElementById('clear-board');
const clearButton = () => {
  button.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
};
clearButton();

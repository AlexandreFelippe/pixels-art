//3
const colorPallete = document.getElementById('color-palette');
const color = document.getElementsByClassName('color'); 
const btn = document.getElementById('button-random-color');
const bigPixel = document.getElementById('pixel-board');

function buttons() {
    const cores = ['black', 'blue', 'red', 'green', 'orange'];
    for (let index = 0; index < 4; index += 1) {
    const button = document.createElement('div');
    button.style.backgroundColor = cores[index];
    button.style.width = '50px'
    button.style.height = '50px'
    button.style.border = '1px solid black'
    button.className = 'color';
    colorPallete.className = "color-palette"
    colorPallete.appendChild(button);
}
return buttons;
}
buttons();


//4
  function coresRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  function clickCoresAleatorias() {
			for (let index = 1; index <= 3; index += 1) {
      color[index].style.backgroundColor = coresRGB();
 		}
		
    }
		btn.addEventListener('click', clickCoresAleatorias);
//5

function storagePallete() {
	const palette = [];
	for (let index = 0; index < color.length; index +=1) {
		palette.push(color[index].style.backgroundColor);
		console.log(palette);
	}
	localStorage.setItem('colorPalette', JSON.stringify(palette));
}
	btn.addEventListener('click', storagePallete);
	function getPallete () {
		const coresStorage = localStorage.getItem('colorPalette')
		const json = JSON.parse(coresStorage)
		if (json) {
		for (let index = 0; index < color.length; index++) {
			color[index].style.backgroundColor = json[index]		
		}
		}
	}
getPallete()
//6
const pixelsBoard = () => {
	bigPixel.style.width = '210px';
	for (let index = 0; index <5 ; index += 1) {
		for (let index = 0; index <5 ; index += 1){
		const pixel = document.createElement('div');
		pixel.className = 'pixel'
		pixel.style.display = 'inline-block'
		pixel.style.border = 'solid black 1px'
		pixel.style.background = 'white'
		pixel.style.height = "40px"
		pixel.style.width = "40px"
		bigPixel.appendChild(pixel)
		}
	}
}
pixelsBoard()

//9
const changeSelect = () => {
	color[0].classList.add('selected');
	colorPallete.addEventListener('click', (event) => {
	for (let index = 0; index < color.length; index +=1) {
		color[index].classList.remove('selected');		
	}
	event.target.classList.add('selected')
	});
}
changeSelect()
//10

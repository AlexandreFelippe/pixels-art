//3
const colorPallete = document.getElementById('color-palette');
const color = document.querySelectorAll('.color')
const btn = document.getElementById('button-random-color')

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
			const color2 = document.getElementsByClassName('color'); 
			for (let index = 1; index <= 3; index += 1) {
      color2[index].style.backgroundColor = coresRGB();
 		}
    }
		btn.addEventListener('click', clickCoresAleatorias);

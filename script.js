const colorPallete = document.getElementById('color-palette');
const color = document.querySelectorAll('.color')

function buttons() {
    const cores = ['black', 'blue', 'red', 'green'];
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
function randonColor() {
    for (let index = 1; index < color.lenght; index +=1) {
        const array = [];
        for (let index1 = 0; index1 < 3; index1 +=1 ) {
        array.push (color[index1]).style.rgb('$index $index $index')
        }
    }
return randonColor;
}
randonColor();
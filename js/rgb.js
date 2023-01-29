const colors = [0];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
let counter = 0;
for(let i = 0; i < 255; i++){
    counter++;
    colors.push(counter)
}
let rgbColor;
function rgbDefault(){
    rgbColor = 'rgb(3, 105, 146)'
    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor;
}
rgbDefault();

btn.addEventListener('click', function(){
        rgbColor = 'RGB';
        rgbColor += '(';
        rgbColor += colors[getRandomNumber()];
        rgbColor += ', ';
        rgbColor += colors[getRandomNumber()];
        rgbColor += ', ';
        rgbColor += colors[getRandomNumber()];
        rgbColor += ')';
    /* const randomNumber = getRandomNumber();
    console.log(randomNumber);
 */
    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
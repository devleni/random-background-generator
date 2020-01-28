const background = document.querySelector("body");
const button = document.querySelector("#colorButton");
const counterOutput = document.querySelector("#counterOutput");
const rgbOutput = document.querySelector("#rgbOutput");

let count = 0;

function randomColor() {
  colorValue = Math.floor(Math.random() * 255);
    return colorValue;
}

function generateBackground() {
  background.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function showColorValues() {
  rgbOutput.innerHTML = background.style.backgroundColor.toUpperCase();
}

function countUp() {
  count += 1;
  counterOutput.innerHTML = count;
}

button.addEventListener("click", function() {
  generateBackground();
  showColorValues();
  countUp();
});


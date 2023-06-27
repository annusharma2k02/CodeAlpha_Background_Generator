window.addEventListener('DOMContentLoaded', () => {
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const generateButton = document.getElementById('generate-button');
  const gradient = document.getElementById('gradient');
  const cssCode = document.getElementById('css-code');

  function setGradient() {
    gradient.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssCode.value = `background: linear-gradient(to right, ${color1.value}, ${color2.value});`;
  }

  generateButton.addEventListener('click', setGradient);
});

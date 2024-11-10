const container = document.querySelector('#container');
const colors = ['#e74', '#8e4', '#349', '#e67', '#2ec'];
const SQUARES = 500;
const setColor = (element) => {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
const removeColor = (element) => {
  console.log('mouseout');
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
};
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

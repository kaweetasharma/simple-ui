const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const stopButton = document.getElementById('stop');
const text = 'We love programming';
let idx = 1;
let speed = 200 / speedElement.value;
let play = true;

const writeText = () => {
  if (play) {
    textElement.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
      idx = 0;
    }
    setTimeout(writeText, speed);
  }
};
writeText();

speedElement.addEventListener('input', (e) => (speed = 200 / e.target.value));
stopButton.addEventListener('click', (e) => {
  if (stopButton.innerText === 'Stop') {
    stopButton.innerText = 'Continue';
    stopButton.style.backgroundColor = 'green';
    play = false;
  } else {
    stopButton.innerText = 'Stop';
    play = true;
    writeText();
    stopButton.style.backgroundColor = 'red';
  }
});

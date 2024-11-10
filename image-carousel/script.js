const imgs = document.querySelector('#imgs');
const imageCollection = document.querySelectorAll('img');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let id = 0;

let interval = setInterval(run, 5000);
function run() {
  id++;
  translate();
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 10000);
}
nextBtn.addEventListener('click', () => {
  id++;
  translate();
  resetInterval();
});
prevBtn.addEventListener('click', () => {
  id--;
  translate();
  resetInterval();
});

const translate = () => {
  if (id < 0) {
    id = imageCollection.length - 1;
  } else if (id > imageCollection.length - 1) {
    id = 0;
  }
  imgs.style.transform = `translate(${-id * 500}px)`;
};

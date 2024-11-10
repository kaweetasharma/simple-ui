const next = document.getElementById('next');
const prev = document.getElementById('prev');
const activeHr = document.getElementById('active-hr');
const steps = document.querySelectorAll('.step');

//current step 1 to begin with
let currStep = 1;
let totalStep = steps.length;
next.addEventListener('click', () => {
  currStep++;
  handleActiveLine();
});

prev.addEventListener('click', () => {
  currStep--;
  handleActiveLine();
});

const handleActiveLine = () => {
  //disable button and limit currStep between 1 and 4
  if (currStep >= totalStep) {
    currStep = totalStep;
    next.disabled = true;
  } else if (currStep <= 1) {
    currStep = 1;
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
  //calculate and set width of active horizontal line
  activeHr.style.width = `${((currStep - 1) / (totalStep - 1)) * 100}%`;
  for (let i = 0; i < totalStep; i++) {
    //remove all active class
    steps[i].classList.remove('active');
    //add active class for all those steps including the currentStep
    if (i < currStep) {
      steps[i].classList.add('active');
    }
  }
};

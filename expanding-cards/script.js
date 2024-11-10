const cards = document.getElementsByClassName('card');
Array.from(cards).forEach((card) => {
  card.addEventListener('click', () => {
    const activeClass = document.getElementsByClassName('active');
    activeClass[0].classList.remove('active');
    card.classList.add('active');
  });
});

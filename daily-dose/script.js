document.addEventListener('DOMContentLoaded', (event) => {
  let cards = document.querySelectorAll('.flip-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      fetchMotivationalMessage().then((message) => {
        card.querySelector('.flip-card-back').innerText = message;
        card.classList.toggle('flipped');
      });
    });
  });
});

async function fetchMotivationalMessage() {
  let response = await fetch('https://type.fit/api/quotes');
  let data = await response.json();

  let randomIndex = Math.floor(Math.random() * data.length);
  let quote = data[randomIndex].text;
  let author = data[randomIndex].author;

  return quote + ' - ' + author; // Quote and author
}

let card = document.querySelector('.card');
let questionElement = document.querySelector('.question');
let answerElement = document.querySelector('.answer');
let nextBtn = document.querySelector(".next-card")
let resetBtn = document.querySelector(".reset-game")

let isFlipped = false;

let flashcards = [
    {question: 'What is the capital of France?', answer: 'Paris'},
    {question: 'What is the capital of Italy?', answer: 'Rome'},
    {question: 'What is the capital of Spain?', answer: 'Madrid'},
    {question: 'What is the capital of Germany?', answer: 'Berlin'},
    {question: 'What is the capital of England?', answer: 'London'},
    {question: 'What is the capital of Greece?', answer: 'Athens'},
    {question: 'What is the capital of Egypt?', answer: 'Cairo'},
    {question: 'What is the capital of Brazil?', answer: 'Brasilia'},
    {question: 'What is the capital of Australia?', answer: 'Canberra'},
    {question: 'What is the capital of Japan?', answer: 'Tokyo'}
];

let copyFlashcards = [...flashcards]

function nextCard() {
  if (copyFlashcards.length == 0) {
    alert("Game over!")
    copyFlashcards = [...flashcards]
  } else {
    let flashcard = selectRandomFlashcard()[0];
    questionElement.textContent = flashcard.question;
    answerElement.textContent = flashcard.answer;
  }
}

nextCard()

nextBtn.addEventListener("click", nextCard)

function selectRandomFlashcard() {
  let randomIndex = Math.floor(Math.random() * copyFlashcards.length);
  return copyFlashcards.splice(randomIndex, 1);
}

function flipCard() {
  if (!isFlipped) {
      // let flashcard = selectRandomFlashcard();
      // questionElement.textContent = flashcard.question;
      // answerElement.textContent = flashcard.answer;
      card.style.transform = 'rotateY(180deg)';
      isFlipped = true;
  } else {
      card.style.transform = 'rotateY(0deg)';
      isFlipped = false;
  }
}

resetBtn.addEventListener("click", () => {
  copyFlashcards = [...flashcards]
  nextCard()
})

// window.onload = function() {
//   flipCard();  // Display the first question when the page loads
// }


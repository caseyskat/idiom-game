const questions = [
  {
    question: <img src="assets/1.jpg" alt=" " />,
    answers: [
      { answerText: "Smile", isCorrect: false },
      { answerText: "bullet in the mouth", isCorrect: false },
      { answerText: "Bite the bullet", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/2.jpg" alt=" " />,
    answers: [
      { answerText: "Make a call", isCorrect: false },
      { answerText: "Call it a day", isCorrect: true },
      { answerText: "Say hello", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/3.jpg" alt=" " />,
    answers: [
      { answerText: "Bare winter", isCorrect: false },
      { answerText: "Have a cold feet", isCorrect: true },
      { answerText: "Have ice feet", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/4.jpg" alt=" " />,
    answers: [
      { answerText: "Cut the corners", isCorrect: true },
      { answerText: "Cut the sticker", isCorrect: false },
      { answerText: "Paper cut", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/5.jpg" alt=" " />,
    answers: [
      { answerText: "draw a sign", isCorrect: false },
      { answerText: "go back painting", isCorrect: false },
      { answerText: "go back to the drawing board", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/6.jpg" alt=" " />,
    answers: [
      { answerText: "room in the elephant", isCorrect: false },
      { answerText: "thinking man", isCorrect: false },
      { answerText: "Elephant in the room", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/7.jpg" alt=" " />,
    answers: [
      { answerText: "cat in the bag", isCorrect: false },
      { answerText: "let the cat out of the bag", isCorrect: true },
      { answerText: "running cat", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/8.jpg" alt=" " />,
    answers: [
      { answerText: "see off the boat", isCorrect: false },
      { answerText: "happy holiday", isCorrect: false },
      { answerText: "miss the boat", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/9.jpg" alt=" " />,
    answers: [
      { answerText: "let someone of the hook", isCorrect: true },
      { answerText: "got on a hook", isCorrect: false },
      { answerText: "hanging man", isCorrect: false },
    ],
  },
];

export const randQuestions = questions.sort(() => Math.random() - 0.5);

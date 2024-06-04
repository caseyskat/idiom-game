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
  {
    question: <img src="assets/10.jpg" alt=" " />,
    answers: [
      { answerText: "piece of cake", isCorrect: true },
      { answerText: "tasty cake", isCorrect: false },
      { answerText: "peace of cake ", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/11.jpg" alt=" " />,
    answers: [
      { answerText: "learning cookie", isCorrect: false },
      { answerText: "smart cookie", isCorrect: true },
      { answerText: "be smart", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/12.jpg" alt=" " />,
    answers: [
      { answerText: "flying pig", isCorrect: false },
      { answerText: "peppa fly", isCorrect: false },
      { answerText: "when the pigs fly", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/13.jpg" alt=" " />,
    answers: [
      { answerText: "speak to the devil", isCorrect: true },
      { answerText: "find the devil", isCorrect: false },
      { answerText: "visit the devil", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/14.jpg" alt=" " />,
    answers: [
      { answerText: "dead birds", isCorrect: false },
      { answerText: "kill two birds with a stone", isCorrect: true },
      { answerText: "two birds better then a stone", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/15.jpg" alt=" " />,
    answers: [
      { answerText: "potato relax", isCorrect: false },
      { answerText: "couch potato", isCorrect: true },
      { answerText: "chill potato", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/16.jpg" alt=" " />,
    answers: [
      { answerText: "funny sheep", isCorrect: false },
      { answerText: "be a sheep", isCorrect: false },
      { answerText: "to be a black sheep", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/17.jpg" alt=" " />,
    answers: [
      { answerText: "make a short story long", isCorrect: false },
      { answerText: "make up a story", isCorrect: false },
      { answerText: "make a long story short", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/18.jpg" alt=" " />,
    answers: [
      { answerText: "break a leg", isCorrect: true },
      { answerText: "broken leg", isCorrect: false },
      { answerText: "sick taddy", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/19.jpg" alt=" " />,
    answers: [
      { answerText: "the last straw", isCorrect: true },
      { answerText: "straw in a drink", isCorrect: false },
      { answerText: "take a straw", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/20.jpg" alt=" " />,
    answers: [
      { answerText: "money cow", isCorrect: false },
      { answerText: "cash cow", isCorrect: true },
      { answerText: "make money from a cow", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/21.jpg" alt=" " />,
    answers: [
      { answerText: "wear your socks", isCorrect: false },
      { answerText: "pull the socks up", isCorrect: true },
      { answerText: "get dressed", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/22.jpg" alt=" " />,
    answers: [
      { answerText: "warm up your tea", isCorrect: false },
      { answerText: "make a storm in a teacup", isCorrect: true },
      { answerText: "thunder in a cup", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/23.jpg" alt=" " />,
    answers: [
      { answerText: "candy on my tongue", isCorrect: false },
      { answerText: "sweet tongue", isCorrect: false },
      { answerText: "on the tip of my tongue", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/24.jpg" alt=" " />,
    answers: [
      { answerText: "wet my mind", isCorrect: false },
      { answerText: "wash your brain", isCorrect: false },
      { answerText: "slipped my mind", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/25.jpg" alt=" " />,
    answers: [
      { answerText: "whispering a secret", isCorrect: false },
      { answerText: "things go in ear and out the other", isCorrect: true },
      { answerText: "going out of my ears", isCorrect: false },
    ],
  },
];

export const randQuestions = questions.sort(() => Math.random() - 0.5);

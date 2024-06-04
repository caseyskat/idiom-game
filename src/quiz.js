const questions = [
  {
    question: <img src="assets/1.jpg" alt=" " />,
    answers: [
      { answerText: "smile", isCorrect: false },
      { answerText: "bullet in the mouth", isCorrect: false },
      { answerText: "bite the bullet", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/2.jpg" alt=" " />,
    answers: [
      { answerText: "make a call", isCorrect: false },
      { answerText: "call it a day", isCorrect: true },
      { answerText: "say hello", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/3.jpg" alt=" " />,
    answers: [
      { answerText: "bare winter", isCorrect: false },
      { answerText: "have a cold feet", isCorrect: true },
      { answerText: "have ice feet", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/4.jpg" alt=" " />,
    answers: [
      { answerText: "cut the corners", isCorrect: true },
      { answerText: "cut the sticker", isCorrect: false },
      { answerText: "paper cut", isCorrect: false },
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
      { answerText: "elephant in the room", isCorrect: true },
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
      { answerText: "cake of peace", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/11.jpg" alt=" " />,
    answers: [
      { answerText: "coockie clever", isCorrect: false },
      { answerText: "reading coockie", isCorrect: false },
      { answerText: "smart coockie", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/12.jpg" alt=" " />,
    answers: [
      { answerText: "pig queen", isCorrect: false },
      { answerText: "see the big in the sky", isCorrect: false },
      { answerText: "when the pigs fly", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/13.jpg" alt=" " />,
    answers: [
      { answerText: "devil speak to a men", isCorrect: false },
      { answerText: "speak to the devil", isCorrect: true },
      { answerText: "visiting hell", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/14.jpg" alt=" " />,
    answers: [
      { answerText: "kill two birds with a stone", isCorrect: true },
      { answerText: "make the birds sleep", isCorrect: false },
      { answerText: "dead birds", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/15.jpg" alt=" " />,
    answers: [
      { answerText: "be a potato chip", isCorrect: false },
      { answerText: "couch potato", isCorrect: true },
      { answerText: "vegetable couch", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/16.jpg" alt=" " />,
    answers: [
      { answerText: "be a cool sheep", isCorrect: false },
      { answerText: "to be a black sheep", isCorrect: true },
      { answerText: "to be a white sheep", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/17.jpg" alt=" " />,
    answers: [
      { answerText: "make the long story short", isCorrect: true },
      { answerText: "make up a story", isCorrect: false },
      { answerText: "write a story", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/18.jpg" alt=" " />,
    answers: [
      { answerText: "break a bear", isCorrect: false },
      { answerText: "break a leg", isCorrect: true },
      { answerText: "fix your taddy", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/19.jpg" alt=" " />,
    answers: [
      { answerText: "take a straw", isCorrect: false },
      { answerText: "the last straw", isCorrect: true },
      { answerText: "get some drink", isCorrect: false },
    ],
  },
  {
    question: <img src="assets/20.jpg" alt=" " />,
    answers: [
      { answerText: "money cow", isCorrect: false },
      { answerText: "milky cash", isCorrect: false },
      { answerText: "cash cow", isCorrect: true },
    ],
  },
  {
    question: <img src="assets/21.jpg" alt=" " />,
    answers: [
      { answerText: "pull your socks up", isCorrect: true },
      { answerText: "get your socks", isCorrect: false },
      { answerText: "get dressed", isCorrect: false },
    ],
  },
];

export const randQuestions = questions.sort(() => Math.random() - 0.5);

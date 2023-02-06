const questions = [
  {
    question: <img src="assets/cake.jpg" alt=" " />,
    answers: [
      { answerText: "Tasty cake", isCorrect: false },
      { answerText: "Piece of cake", isCorrect: true },
      { answerText: "Peace of cake", isCorrect: false },
    ],
  },
];

export const randQuestions = questions.sort(() => Math.random() - 0.5);

import React, { useState } from 'react';

const Quiz = () => {
  // Quiz data: questions, options, and correct answers
  const quizQuestions = [
    {
        question: "What is an exoplanet?",
        options: [
          "A planet within our Solar System",
          "A planet outside of our Solar System",
          "A star with planets",
          "A galaxy far, far away",
        ],
        answer: "A planet outside of our Solar System",
      },
      {
        question: "Which method is most commonly used to discover exoplanets?",
        options: [
          "Direct Imaging",
          "Transit Method",
          "Radial Velocity Method",
          "Microlensing",
        ],
        answer: "Transit Method",
      },
      {
        question: "What was the first exoplanet discovered?",
        options: [
          "Proxima Centauri b",
          "PSR B1257+12",
          "Kepler-452b",
          "51 Pegasi b",
        ],
        answer: "PSR B1257+12",
      },
      {
        question: "Which of these exoplanets is located in the habitable zone?",
        options: [
          "Kepler-452b",
          "WASP-12b",
          "TOI-178b",
          "GJ 1214b",
        ],
        answer: "Kepler-452b",
      },
      {
        question: "Which star hosts the most known exoplanets?",
        options: [
          "Kepler-90",
          "Proxima Centauri",
          "Gliese 667 C",
          "Kepler-186",
        ],
        answer: "Kepler-90",
      },
      {
        question: "What is the habitable zone?",
        options: [
          "A region where liquid water can exist on a planet's surface",
          "A region around black holes",
          "A region beyond the Kuiper Belt",
          "A region with only gas giant planets",
        ],
        answer: "A region where liquid water can exist on a planet's surface",
      },
      {
        question: "Which space telescope has discovered the most exoplanets?",
        options: [
          "James Webb Space Telescope",
          "Hubble Space Telescope",
          "Kepler Space Telescope",
          "Spitzer Space Telescope",
        ],
        answer: "Kepler Space Telescope",
      },
      {
        question: "What is a ‘super-Earth’?",
        options: [
          "A planet with Earth-like conditions and size",
          "A planet larger than Earth but smaller than Neptune",
          "A planet with double the mass of Earth",
          "A planet with a high magnetic field like Earth",
        ],
        answer: "A planet larger than Earth but smaller than Neptune",
      },
      {
        question: "Which exoplanet is the closest known to Earth?",
        options: [
          "Proxima Centauri b",
          "Gliese 581g",
          "Kepler-22b",
          "TRAPPIST-1e",
        ],
        answer: "Proxima Centauri b",
      },
      {
        question: "What is the Goldilocks zone?",
        options: [
          "A region too hot for planets to exist",
          "A region too cold for life to exist",
          "A region where the temperature is just right for life",
          "A region where gas giants form",
        ],
        answer: "A region where the temperature is just right for life",
      },
  ];

  // State to keep track of current question, user's answers, and score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // Handle answer selection
  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Track the user's answer
    setUserAnswers([
      ...userAnswers,
      { question: currentQuestion.question, selectedOption },
    ]);

    // Check if the answer is correct and update score
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    // Proceed to the next question or show results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Exoplanet Quiz</h1>

      {/* Show quiz questions and options */}
      {!showResults ? (
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            {quizQuestions[currentQuestionIndex].question}
          </h2>
          <div className="space-y-2">
            {quizQuestions[currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="block w-full p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // Show results
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
          <p className="text-lg mb-4">
            You scored {score} out of {quizQuestions.length}.
          </p>
          
          <button
            onClick={resetQuiz}
            className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

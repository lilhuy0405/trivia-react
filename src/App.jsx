import './App.css'

const questions = [
  {
    id: 1,
    type: "multiple",
    question: "What is the capital of France?",
    answers: [
      {id: 1, text: "Paris"},
      {id: 2, text: "London"},
      {id: 3, text: "Berlin"},
      {id: 4, text: "Madrid"},
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    type: "multiple",
    question: "What is the capital of Spain?",
    answers: [
      {id: 1, text: "Paris"},
      {id: 2, text: "London"},
      {id: 3, text: "Berlin"},
      {id: 4, text: "Madrid"},
    ],
    correctAnswer: 4,
  },
  {
    id: 3,
    type: "multiple",
    question: "Is HTML a programming language?",
    answers: [
      {id: 1, text: "Yes"},
      {id: 2, text: "No"},
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    type: "multiple",
    question: "Is CSS a programming language?",
    answers: [
      {id: 1, text: "Yes"},
      {id: 2, text: "No"},
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    type: "multiple",
    question: "In JavaScript  which keyword to declare a variable?",
    answers: [
      {id: 1, text: "int"},
      {id: 2, text: "string"},
      {id: 3, text: "const"},
      {id: 4, text: "function"},
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    type: "free",
    question: "Keyword to declare a function in JavaScript?",
    correctAnswer: "function",
  },
  {
    id: 7,
    type: "free",
    question: "Which city is the capital of Vietnam?",
    correctAnswer: "Hanoi",
  },
];

function App() {


  return (
    <>
      <div className="header">
        <h1>Trivia!</h1>
      </div>

      <div className="container">
        <div className="section">
          <h2>Part 1: Multiple Choice</h2>
          <hr/>
          {/*TODO: Add multiple choice question here */}

        </div>

        <div className="section">
          <h2>Part 2: Free Response</h2>
          <hr/>
        {/*TODO: Add free response question here */}

        </div>
      </div>
    </>
  )
}

export default App

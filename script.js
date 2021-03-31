const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Q1 What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Q2 Which method is the foster method',
    answers: [
      { text: 'THE BOX METHOD', correct: false },
      { text: 'THE ALGEBRAIC METHOD', correct: true },
    ]
  },
  {
    question: 'Q3 IF I MULITIPLY (3x - 1) and (2x -9 ) what whould it be?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: '6x^2 - 29x + 9', correct: true },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Q4 What is -4 * -2x?',
    answers: [
      { text: '-8x', correct: false },
      { text: '8x', correct: true }
    ]
  },
  {
    question: 'Q5 What is 88 * 2?',
    answers: [
      { text: '88 * 2 =  162', correct: false },
      { text: '88 * 2 =  172', correct: true }
    ]
  },
  {
    question: 'Q6 What is 400 * 2?',
    answers: [
      { text: '800', correct: true },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Q7 What is 888x * 2?',
    answers: [
      { text: '1,776x', correct: false },
      { text: '1,776x^2', correct: true }
    ]
  },
  {
    question: 'Q8 WHAT DO I CALL HE LOGAS SCREEW UP?',
    answers: [
      { text: 'When She does not say hello', correct: true },
      { text: 'When she does not email back', correct: false }      
    ]
  },
  {
    question: 'Q7 What is 888x * 2?',
    answers: [
      { text: '1,776x', correct: false },
      { text: '1,776x^2', correct: true }
    ]
  },

]
import questions from './questions-answers.js'

let questionDiv = document.querySelector('.question')
let eachAnswer = document.querySelectorAll('.each-answer')
let btnNext = document.querySelector('.btn-next')

let currentIndex = 0;
let score = 0;

// 1. cada .question deve receber uma question
// 2 . cada div .each-answer deve receber uma option
// 3. a cada clique em .each-answer, deverá ser testado se a opção é certa.


function loadQuestion() {
    questionDiv.innerHTML = questions[currentIndex].question

    questions[currentIndex].answers.forEach( (answer, index) => {
        eachAnswer[index].innerHTML = answer.option
    })

}

if(questions[0].answers[0].correct == true) {
    console.log('sim')
}

loadQuestion()

function chooseAnswer() {
    questions[currentIndex].answers.forEach( (answer, index) => {
        if(answer.correct == true) {
            eachAnswer[index].style.backgroundColor = 'red'
        }
    })
}

chooseAnswer()



btnNext.addEventListener('click', function() {
    currentIndex++
    loadQuestion()
})

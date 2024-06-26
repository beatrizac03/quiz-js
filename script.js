import questions from './questions-answers.js'

let questionDiv = document.querySelector('.question')
let eachAnswer = document.querySelectorAll('.each-answer')
let btnNext = document.querySelector('.btn-next')
let btnStartGame = document.querySelector('.btn-startgame')
let divContQuiz = document.querySelector('.cont-quiz')

let currentIndex = 0;
let score = 0;

btnStartGame.addEventListener('click', startGame)



btnNext.addEventListener('click', loadQuestion)


// 1. cada .question deve receber uma question
// 2 . cada div .each-answer deve receber uma option
// 3. a cada clique em .each-answer, deverá ser testado se a opção é certa.

function startGame() {
    divContQuiz.classList.remove('hidden')
    loadQuestion()
}

function loadQuestion() {
    resetState()

    questionDiv.textContent = questions[currentIndex].question
    questionDiv.style.color = 'white'

    questions[currentIndex].answers.forEach( (answer, index) => {
        eachAnswer[index].innerHTML = answer.option;

        if (answer.correct) {
            eachAnswer[index].dataset.correct = true;
        }
    })

    eachAnswer.forEach( answer => {
        answer.addEventListener('click', selectAnswer) // adiciona um evento p cada opção de resposta, ou seja vai testar cada uma das opções c a função select answer
    })

}

function resetState() {
    document.body.removeAttribute('class')
    btnNext.classList.add('hidden')

    eachAnswer.forEach(button => {
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
        button.removeAttribute('data-correct')
    });

    btnNext.classList.add('hidden');
}


function selectAnswer (event) {
    let answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
    } else {
        document.body.classList.add('incorrect')
    }

    eachAnswer.forEach(button => {
        if(button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }

        button.disabled = true
    })
    
    currentIndex++

    btnNext.classList.remove('hidden')
}



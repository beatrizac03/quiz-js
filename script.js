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
    questionDiv.style.color = 'white'

    questions[currentIndex].answers.forEach( (answer, index) => {
        eachAnswer[index].innerHTML = answer.option;

        if (answer.correct) {
            eachAnswer[index].dataset.correct = true;
        }
})

}

if(questions[0].answers[0].correct == true) {
    console.log('sim')
}

// function chooseAnswer() {
//     questions[currentIndex].answers.forEach( (answer, index) => {
//         if(answer.correct) {
//             eachAnswer[index].style.backgroundColor = 'red'
//             eachAnswer[index].dataset.correct = answer.correct
//         } else {
//             eachAnswer[index].style.backgroundColor = 'green'
//         }
//     })
// }


function chooseAnswer (event) {
    let divEv = event.target
    console.log(divEv)
    if (divEv.dataset.correct === "true") {
        divEv.style.backgroundColor = 'green';
    } else {
        divEv.style.backgroundColor = 'red';
    }

    
}

function selectAnswer(event) {
    let chosenAnswer = event.target
    const isCorrect = chosenAnswer.dataset.correct == "true"
    if(isCorrect){
        chosenAnswer.classList.add("correct")
    } else {
        chosenAnswer.classList.add("incorrect")
    }

}

eachAnswer.forEach( answer => {
    answer.addEventListener('click', chooseAnswer)
})

btnNext.addEventListener('click', function() {
    currentIndex++
    loadQuestion()
})


loadQuestion()

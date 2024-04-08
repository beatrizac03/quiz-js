const questions = [
    {
        question: "1. O quê significa HTML?",
        answers: [
            { option: "a) Hypertext Markup Language", correct: true},
            { option: "b) Hyper Transfer Markup Language", correct: false},
            { option: "c) Hyperlinks and Text Markup Language", correct: false},
            { option: "d) High-Level Text Markup Language", correct: false},
        ]
    },
    {
        question: "2. Como você cria um link em HTML?",
        answers: [
            { option: "a) <a src=\"link\">Texto do Link</a>", correct: false},
            { option: "b) <link href=\"link\">Texto do Link</link>", correct: false},
            { option: "c) <a href=\"link\">Texto do Link</a>", correct: true},
            { option: "d) <link src=\"link\">Texto do Link</link>", correct: false},
        ]
    }
]

let questionDiv = document.querySelector('.question')
let eachAnswer = document.querySelectorAll('.each-answer')
let btnNext = document.querySelector('.btn-next')

let currentIndex = 0;
let score = 0;

// 1. cada .question deve receber uma question
// 2 . cada div .each-answer deve receber uma option
// 


function loadQuestion() {
    questionDiv.innerHTML = questions[currentIndex].question

    questions[currentIndex].answers.forEach( (answer, index) => {
        eachAnswer[index].innerHTML = answer.option
    })

}

loadQuestion()


btnNext.addEventListener('click', function() {
    currentIndex++
    loadQuestion()
})

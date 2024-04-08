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
            { 
                option: "a) &lt;a src=&quot;link&quot;&gt;Texto do Link&lt;/a&gt;", 
                correct: false
            },
            { 
                option: "b) &lt;link href=&quot;link&quot;&gt;Texto do Link&lt;/link&gt;", 
                correct: false
            },
            { 
                option: "c) &lt;a href=&quot;link&quot;&gt;Texto do Link&lt;/a&gt", 
                correct: true
            },
            { 
                option: "d) &lt;link src=&quot;link&quot;&gt;Texto do Link&lt;/link&gt;", 
                correct: false
            },
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



btnNext.addEventListener('click', function() {
    currentIndex++
    loadQuestion()
})

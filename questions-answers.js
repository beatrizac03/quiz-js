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
    },
    {
        question: "3. Qual é a função da tag <head> em um documento HTML?",
        answers: [
            { 
                option: "a) Definir o conteúdo principal da página", 
                correct: false
            },
            { 
                option: "b) Incluir elementos visuais como imagens e vídeos", 
                correct: false
            },
            { 
                option: "c) Fornecer informações sobre o documento como título, scripts e metadados", 
                correct: true
            },
            { 
                option: "d) Estruturar o layout da página", 
                correct: false
            },
        ]
    },
    {
        question: "4. Como você seleciona um elemento HTML usando JavaScript?Qual é a função da tag <head> em um documento HTML?",
        answers: [
            { 
                option: "a) Utilizando o seletor # seguido pelo ID do elemento.", 
                correct: false
            },
            { 
                option: "b) Utilizando o seletor . seguido pela classe do elemento.", 
                correct: false
            },
            { 
                option: "c) Utilizando o método getElementByTagName() e especificando o nome da tag HTML.", 
                correct: false
            },
            { 
                option: "d) Utilizando o método querySelector() e especificando um seletor CSS.", 
                correct: true
            },
        ]
    }
]

export default questions;

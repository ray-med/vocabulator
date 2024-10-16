// В этом скрипте логика приложения (копия до переезда на обнову БД - ООП)

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

// get random 10 questions from DB
// ...

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    // console.log(currentQuestion)
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer == currentQuestion.correct_answer){
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextButton.style.display = 'none';
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }

    let currentQuestion = questions[currentQuestionIndex];
    let info = document.getElementsByClassName('btn');
    for (var i = 0; i < info.length; i++){
        info[i].innerHTML = currentQuestion.comments[i];
    }
    // info[0].innerHTML = currentQuestion.comments[0];
    // info[1].innerHTML = currentQuestion.comments[1];
    // info[2].innerHTML = currentQuestion.comments[2];
    // info[3].innerHTML = currentQuestion.comments[3];

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';

    
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
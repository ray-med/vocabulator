///////////////////////////////////////////////////////////////////////////////////////////////////
//// В этом скрипте логика самого квиза
////
//// При перезапуске квиза варианты ответов на тех же местах, а надо шафлить
//// может лучше шафлить в функции showQuestion()?
///////////////////////////////////////////////////////////////////////////////////////////////////

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
let [currentMode, nq] = getMode()
let questions = get_random_nq_from_questionDB(currentMode, nq);
let quizVersion = 0.71
document.querySelector('.app > h3').innerHTML = `Движок тестирования ${quizVersion}`
startQuiz();

function getMode(){
    const params = new URLSearchParams(window.location.search); // получаем параметры из URL
    let titleValue = params.get("title"); // извлекаем значение параметра "title"
    let db, nq
    console.log(`Внутри getMode titleValue: ${titleValue}`)
    switch (titleValue){
        case 'questionDB1':
            document.title = 'Bash тест 1';
            db = 'questionDB1';
            nq = 5;
            break;
        case 'questionDB2':
            document.title = 'Bash тест 2';
            db = 'questionDB1';
            nq = 2;
            break;
        case 'arenadb':
            document.title = 'Bash тест 1';
            db = 'arenadb';
            nq = 10;
            break;
        case 'questionDBt':
            document.title = 'тест фич';
            db = 'questionDBt';
            nq = 1;
            break;
    }
    console.log(`Внутри getMode после case db и nq: ${db} ${nq}`)
    return [db, nq]
}

function get_random_nq_from_questionDB(mode, nq){
    // 1) get random 3 questions from DB
    let db = databaseContainer[mode]
    const questionsForSession = [];
    while (questionsForSession.length < nq) {
        const randomIndex = Math.floor(Math.random() * db.length);
        if (!questionsForSession.includes(db[randomIndex])) {
            questionsForSession.push(db[randomIndex]);
        }
    }
    // 2) Shuffle answers inside every question
    questionsForSession.forEach((q) => {
        for (let i = q.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            swap(q.answers, i, j);
        }
    })
    // 3) Return questions array
    console.log(questionsForSession)
    return questionsForSession;
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        // console.log(`typeof(answer): ${typeof(answer)}`)
        // console.log(answer)
        const button = document.createElement('button');
        button.innerHTML = answer[0];
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer[0] == currentQuestion.correct_answer){
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function selectAnswer(event){
    const selectedBtn = event.target;
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
        info[i].innerHTML = currentQuestion.answers[i][1];
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

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play again';
    nextButton.style.display = 'block';

    questions = get_random_3q_from_questionDB(questionDB1);
}

function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextButton.style.display = 'none';
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
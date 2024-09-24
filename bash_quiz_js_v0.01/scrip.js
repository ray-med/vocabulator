function toIndex(){
    document.getElementById('submit').removeEventListener('click', showResults);
    document.body.innerHTML = "";
    document.body.id = 'mainPage';
    document.body.innerHTML = `<h1>Обучающие тесты bash</h1>
    <div id="wrapperogl">
      <table id="oglavlenie">
        <tr><td class="tema"><a href="metodi4ka.html"><p>Краткий методический материал</p></a></td></tr>
        <tr><td class="tema" onclick="toTeor()"><p>Тест по bash уровень сложности 1</p></td></tr>
        <tr><td class="tema" onclick="toPodgot()"><p>Тест по bash уровень сложности 2</p></td></tr>
      </table>
    </div>`;
  }
  
  function toTeor(){
    document.body.innerHTML = "";
    document.body.removeAttribute('id');
    document.body.innerHTML = `<h1>Начальное тестирование испытателя</h1>
    <div id="myHeader">
      <div id="back" onclick="toIndex()">
        <span class="icon">⇦</span> Назад
      </div>
      <h2>Проверка общих теоретических знаний</h2>
    </div>
    <div id="quiz"></div>
    <button id="submit">Проверить</button>
    <div id="results"></div>`;
    tema = teor;
    buildQuiz();
    document.getElementById('submit').addEventListener('click', showResults);
  
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    window.onscroll = function() {headerFixer(header, sticky)};
  }
  
  function toPodgot(){
    document.body.innerHTML = "";
    document.body.removeAttribute('id');
    document.body.innerHTML = `<h1>Начальное тестирование испытателя</h1>
    <div id="myHeader">
      <div id="back" onclick="toIndex()">
        <span class="icon">⇦</span> Назад
      </div>
      <h2>Вопросы по подготовке к испытаниям</h2>
    </div>
    <div id="quiz"></div>
    <button id="submit">Проверить</button>
    <div id="results"></div>`;
    tema = podgot;
    buildQuiz();
    document.getElementById('submit').addEventListener('click', showResults);
  }
  
  function toProblems(){
    document.body.innerHTML = "";
    document.body.removeAttribute('id');
    document.body.innerHTML = `<h1>Начальное тестирование испытателя</h1>
    <div id="myHeader">
      <div id="back" onclick="toIndex()">
        <span class="icon">⇦</span> Назад
      </div>
      <h2>Распознавание косяков</h2>
    </div>
    <div id="quiz"></div>
    <button id="submit">Проверить</button>
    <div id="results"></div>`;
    tema = problems;
    buildQuiz();
    document.getElementById('submit').addEventListener('click', showResults);
  }
  
  function buildQuiz(){
    let quizContainer = document.getElementById('quiz');
  
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    tema.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              <!-- <span class="circle">${letter}</span> -->
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div><hr>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults(){
    let resultsContainer = document.getElementById('results');
    let quizContainer = document.getElementById('quiz');
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    tema.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `Правильных ответов: ${numCorrect} из ${tema.length}`;
  }
  
  function headerFixer(header, sticky) {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  
  var tema;
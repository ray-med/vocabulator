// Main JS

toIndex();


function toIndex(){
  // document.getElementById('submit').removeEventListener('click', showResults);
  document.body.innerHTML = "";
  document.body.id = 'mainPage';
  document.body.innerHTML = `<h1>Тесты для DBA</h1>
  <div id="wrapperogl">
    <table id="oglavlenie">

      <tr>
        <td class="tema" onclick="toTeor()">
          <p>Краткий методический материал</p>
        </td>
      </tr>

      <tr>
        <td class="tema" id="bash_quiz1" onclick="toQuizPage('questionDB1')">
          <p>Тест по bash уровень сложности 1</p>
        </td>
      </tr>

      <tr>
        <td class="tema" id="bash_quiz2" onclick="toQuizPage('questionDBt')">
          <p>Тест по bash уровень сложности 2</p>
        </td>
      </tr>

      <tr>
        <td class="tema" id="arenadb_quiz"onclick="toQuizPage('arenadb')">
          <p>Тест по ArenaDB</p>
        </td>
      </tr>

    </table>
  </div>`;
}

function toTeor(){
  document.body.innerHTML = "";
  document.body.removeAttribute('id');
  document.body.innerHTML = `<h1>Теория Bash</h1>
  <div id="myHeader">
    <div id="back" onclick="toIndex()">
    <span class="icon">⇦</span> Назад
    </div>
    <h2>Теория Bash</h2>
  </div>
  <div id="teor">
    <div class='article'>
      <h3>${bash.du.description}</h3>
      <p>${bash.du.s.description}</br>${bash.du.h.description}</p>
    </div>

    <div class='article'>
      <h3>${bash.df.description}</h3>
      <p>${bash.df.h.description}</p>
    </div>
    
    <div class='article'>
      <h3>${bash.ls.description}</h3>
      <p>${bash.ls.a.description}</br>${bash.ls.l.description}</br>${bash.ls.h.description}</p>
    </div>
  </div>`;

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  window.onscroll = function() {headerFixer(header, sticky)};
}

function toQuizPage(titleParam) {
  const quizPageUrl = "quiz.html?title=" + encodeURIComponent(titleParam);
  window.location.href = quizPageUrl;
}

// Main JS
// import { bash } from "linux/bash.js";

toIndex();

function toIndex(){
  // document.getElementById('submit').removeEventListener('click', showResults);
  document.body.innerHTML = "";
  document.body.id = 'mainPage';
  document.body.innerHTML = `<h1>Обучающие тесты bash</h1>
  <div id="wrapperogl">
    <table id="oglavlenie">
      <tr><td class="tema" onclick="toTeor()"><p>Краткий методический материал</p></a></td></tr>
      <tr><td class="tema" onclick="window.location.href='./qz/index.html'; return false"><p>Тест по bash уровень сложности 1</p></td></tr>
      <tr><td class="tema"><p>Тест по bash уровень сложности 2</p></td></tr>
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

let bash = {
  description: 'Big bash object',
  ff: 'dfg'
}

bash['df'] = {
  description: 'df - report file system disk space usage',
  h: {
    description: '-h flag shows ls with human readable bytes format.'
  }
}

bash['du'] = {
  description: 'du - estimate file space usage',
  h: {
    description: '-h flag shows ls with human readable bytes format.'
  },
  s: {
    description: '-s flag show sum'
  }
}

bash['ls'] = {
  description: 'ls - shows list of files in the directory',
  a: {
    description: '-a flag shows ls with hidden files.'
  },
  l: {
    description: '-l flag shows ls in long format.'
  },
  h: {
    description: '-h flag shows ls with human readable bytes format.'
  }
}

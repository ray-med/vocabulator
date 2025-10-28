///////////////////////////////////////////////////////////////////////////////////////////////////
// "База Данных" вопросов по bash первого уровеня сложности v0.3.1
///////////////////////////////////////////////////////////////////////////////////////////////////

const databaseContainer = {

  // DB for Leve1 quiz
  questionDB1: [
    {
      id: 1,
      question: "Какая команда bash показывает список файлов директории /home/ola?",
      correct_answer: 'ls /home/ola',
      answers: [
        ['cd /home/ola', 'cd - (Change Directory) сменить директорию'],
        ['ls /home/ola', 'ls - LiSt files'],
        ['df /home/ola', 'df - Disk Filesystem'],
        ['du /home/ola', 'du - Disk Usage']
      ],
    },
    {
      id: 2,
      question: "Какая команда bash позволяет перейти в директорию /home/eva?",
      correct_answer: 'cd /home/eva',
      answers: [
        ['cd /home/eva', 'cd - (Change Directory) сменить директорию'],
        ['ls /home/eva', 'ls - LiSt files'],
        ['df /home/eva', 'df - Disk Filesystem'],
        ['du /home/eva', 'du - Disk Usage']
      ],
    },
    {
      id: 3,
      question: "Как узнать на сколько % занят диск?",
      correct_answer: 'df',
      answers: [
        ['cd', 'cd - (Change Directory) сменить директорию'],
        ['ls', 'ls - LiSt files'],
        ['df', 'df - Disk Filesystem'],
        ['du', 'du - Disk Usage']
      ],
    },
    {
      id: 4,
      question: "Как сменить юзера ОС на leo?",
      correct_answer: 'su - leo',
      answers: [
        ['su - leo', 'su - Switch User'],
        ['nc - leo', 'nc -vz <ip> <port> проверить доступность порта на конкретном сервере'],
        ['w - leo', 'w - Who кто сейчас подключён к серверу'],
        ['pwd - leo', 'pwd - Present Working Directory']
      ],
    },
    {
      id: 5,
      question: "Как узнать текущую директорию?",
      correct_answer: 'pwd',
      answers: [
        ['cd', 'cd - (Change Directory) сменить директорию'],
        ['ls', 'ls - LiSt files'],
        ['pwd', 'pwd - Present Working Directory'],
        ['mv', 'mv - MoVe']
      ],
    },
    {
      id: 6,
      question: "Как создать юзера ОС dima?",
      correct_answer: 'useradd dima',
      answers: [
        ['su - dima', 'su - Switch User'],
        ['nc - dima', 'nc -vz <ip> <port> проверить доступность порта на конкретном сервере'],
        ['useradd dima', 'useradd - добавить юзера'],
        ['pwd - dima', 'pwd - Present Working Directory']
      ],
    },
    {
      id: 7,
      question: "Как удалить юзера ОС vasya?",
      correct_answer: 'userdel vasya',
      answers: [
        ['su - vasya', 'su - Switch User'],
        ['nc - vasya', 'nc -vz <ip> <port> проверить доступность порта на конкретном сервере'],
        ['userdel vasya', 'userdel - удалить юзера'],
        ['pwd - vasya', 'pwd - Present Working Directory']
      ],
    },
  ],

  // DB for Leve2 quiz
  questionDB2: [
    {
      id: 1,
      question: "Как проверить доступность 22 порта на сервере 192.168.1.33?",
      correct_answer: 'nc 192.168.1.33 22',
      answers: [
        ['cd 192.168.1.33', 'cd - (Change Directory) сменить директорию'],
        ['ls 192.168.1.33 22', 'ls - LiSt files'],
        ['pwd 22', 'pwd - Present Working Directory'],
        ['nc 192.168.1.33 22', 'nc -vz <ip> <port> проверить доступность порта на конкретном сервере']
      ],
    },
    {
      id: 2,
      question: "Как проверить доступность 5432 порта на сервере 192.168.10.123?",
      correct_answer: 'nc 192.168.10.123 5432',
      answers: [
        ['cd 192.168.10.123', 'cd - (Change Directory) сменить директорию'],
        ['ls 192.168.10.123 5432', 'ls - LiSt files'],
        ['pwd 22', 'pwd - Present Working Directory'],
        ['nc 192.168.10.123 5432', 'nc -vz <ip> <port> проверить доступность порта на конкретном сервере']
      ],
    },
  ],

  arenadb: [
    {
      id: 1,
      question: "REDISTRIBUTE MOTION в плане запроса:",
      correct_answer: '?????????',
      answers: [
        ['Не может появиться при JOIN-e между двумя таблицами, распределёнными по политике DISTRIBUTED RANDOMLY', ''],
        ['Может вызвать перегрузку сегмента при использовании в JOIN поля, которое плохо подходит для распределения.', ''],
        ['Соответствует наличию перекоса в распределении данных таблиц, участвующих в запросе.', ''],
        ['Означает присутствие в запросе операции JOIN не по ключу распределения одной из таблиц.', '']
      ],
    },
    {
      id: 2,
      question: "Partition Elimination:",
      correct_answer: 'Не работает при выполнении преобразования типа данных в блоке WHERE.',
      answers: [
        ['Является механизмом, позволяющим организовать параллельное чтение данных таблиц сегментами при формировании выборки.', ''],
        ['Не работает при выполнении преобразования типа данных в блоке WHERE.', ''],
        ['Не работает с IMMUTABLE функциями.', ''],
        ['Позволяет снизить число REDISTRIBUTE MOTION в плане запроса.', '']
      ],
    },
    {
      id: 3,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
    {
      id: 4,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
    {
      id: 5,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
    {
      id: 6,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
    {
      id: 7,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
    {
      id: 8,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
    {
      id: 9,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
    {
      id: 10,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
    {
      id: 11,
      question: "",
      correct_answer: '',
      answers: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
    },
  ],

  // DB for test of answers shuffle
  questionDBt: [
    {
      id: 1,
      question: "Какая кнопка показывает текст 3333?",
      correct_answer: '3333',
      answers: [
        ['1111', '11'],
        ['2222', '22'],
        ['3333', '33'],
        ['4444', '44']
      ]
    }
  ]
}

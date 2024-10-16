///////////////////////////////////////////////////////////////////////////////////////////////////
// "База Данных" вопросов по bash первого уровеня сложности v0.1
///////////////////////////////////////////////////////////////////////////////////////////////////

// ================ Commands ======================================================================
class Command {
	constructor(answer, comment){
		this.answer = answer;
		this.comment = comment;
	}
}

const pwd = new Command('pwd', 'pwd - Present Working Directory');
const cd = new Command('cd', 'cd - (Change Directory) сменить директорию');
const ls = new Command('ls', 'ls - LiSt files');
const mv = new Command('mv', 'mv - MoVe');
const cp = new Command('cp', 'cp - CoPy');
const scp = new Command('scp', 'scp - Ssh CoPy');
const touch = new Command('touch', 'touch - создать новый текстовый файл');

const useradd = new Command('useradd', 'useradd - добавить юзера');
const su = new Command('su - ola', 'su - Switch User');
const whoami = new Command('whoami', 'whoami - кто я');
const chown = new Command('chown', 'chown - CHange OWNer');
const chmod = new Command('chmod', 'chmod - CoPy');

const df = new Command('df', 'df - Disk Filesystem');
const du = new Command('du', 'du - Disk Usage');
const lsblk = new Command('lsblk', 'lsblk - LiSt BLocK devices');
const free = new Command('free', 'free - информация об оперативке');
const lscpu = new Command('lscpu', 'lscpu - информация о процессоре');

const ip = new Command('ip a', 'ip a - узнать ip адрес');
const ping = new Command('ping 192.168.1.22', 'ping <ip>- проверить доступность компьютера');
const nc = new Command('nc', 'nc -vz <ip> <port> проверить доступность порта на конкретном сервере');
const w = new Command('w', 'w - Who кто сейчас подключён к серверу');

const echo = new Command('echo "Hello world"', 'echo - эхо напечатать строку в терминал');
const cat  = new Command('cat file.txt', 'cat file.txt - напечатать файл в терминал');
const head = new Command('head file.txt', 'head - напечатать начало файла');
const tail = new Command('tail file.txt', 'tail - напечатать конец файла');
const more = new Command('more file.txt', 'more - открыть файл и почитать');
const less = new Command('less file.txt', 'less - открыть файл и почитать');
const nano = new Command('nano file.txt', 'nano - текстовый редактор');
const grep = new Command('grep 192 file.txt', 'grep - фильтр строк');

// ================ Questions =====================================================================
const questions = [
  {
    question: "Какая команда bash показывает список файлов директории /home/ola?",
    answers: [
      ['cd /home/ola', 'cd - (Change Directory) сменить директорию'],
      ['ls /home/ola', 'ls - LiSt files'],
      ['df /home/ola', 'df - Disk Filesystem'],
      ['du /home/ola', 'du - Disk Usage']
    ],
    correct_answer: 'ls /home/ola'
  },
  {
    question: "Какая команда bash позволяет сменить текущую директорию на /home/ola?",
    answers: [
      ['cd /home/ola', 'cd - (Change Directory) сменить директорию'],
      ['ls /home/ola', 'ls - LiSt files'],
      ['df', 'df - Disk Filesystem'],
      ['du', 'du - Disk Usage']
    ],
    correct_answer: 'cd /home/ola'
  },
  {
    question: "Как узнать на сколько % занят диск?",
    answers: [
      ['cd', 'cd - (Change Directory) сменить директорию'],
      ['ls', 'ls - LiSt files'],
      ['df', 'df - Disk Filesystem'],
      ['du', 'du - Disk Usage']
    ],
    correct_answer: 'df'
  },
  {
    question: "Как сменить юзера ОС на ola?",
    answers: [
      ['su - ola', 'su - Switch User'],
      ['nc - ola', 'nc -vz <ip> <port> проверить доступность порта на конкретном сервере'],
      ['w - ola', 'w - Who кто сейчас подключён к серверу'],
      ['pwd - ola', 'pwd - Present Working Directory']
    ],
    correct_answer: 'su - ola'
  },
  {
    question: "Как узнать текущую директорию?",
    answers: [
      ['cd', 'cd - (Change Directory) сменить директорию'],
      ['ls', 'ls - LiSt files'],
      ['pwd', 'pwd - Present Working Directory'],
      ['mv', 'mv - MoVe']
    ],
    correct_answer: 'pwd'
  },
  {
    question: "Как проверить доступность 22 порта на сервере 192.168.1.33?",
    answers: [
      ['cd 192.168.1.33', 'cd - (Change Directory) сменить директорию'],
      ['ls 192.168.1.33 22', 'ls - LiSt files'],
      ['pwd 22', 'pwd - Present Working Directory'],
      ['nc 192.168.1.33 22', 'nc -vz <ip> <port> проверить доступность порта на конкретном сервере']
    ],
    correct_answer: 'nc 192.168.1.33 22'
  },
]

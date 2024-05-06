// Комментарий:
/*
-- ПРИНЦИП РАБОТЫ --
Мое решение реализует дек (двустороннюю очередь) с фиксированным размером, используя массив.
Дек поддерживает операции добавления и удаления элементов как с начала, так и с конца.
При добавлении элемента в начало дека он помещается перед уже существующими элементами, а при добавлении в конец — после.
При удалении элемента из начала дека он извлекается из самого начала, а при удалении из конца — из самого конца.
Я сделала это для сохранения порядка элементов.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Корректность работы дека следует из его принципов: элементы добавляются и извлекаются в том порядке, в котором они были добавлены.
Так как дек поддерживает как добавление, так и удаление элементов как с начала, так и с конца, сохраняется порядок элементов.
Кроме того, добавлена проверка размера дека, чтобы он не превышал заданное максимальной значение.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Добавление и удаление элементов в начале или конце дека происходит за O(1) времени.
Это происходит потому, что массив, используемый для реализации деки,
поддерживает операции добавления и удаления элементов в начале и конце за фиксированное время.
Общая временная сложность составляет O(N), где N — количество команд.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность моего решения зависит от максимального размера дека.
Так как дек хранит только фиксированное количество элементов, пространственная сложность моего решения составляет O(N + M),
где N — количество команд, M - максимальный размер дека.
*/

// Отчет: https://contest.yandex.ru/contest/22781/run-report/111950932/

const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', run);

function readNum() {
  const n = Number(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function readStr() {
  const n = String(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function getCommands(count) {
  const commands = [];

  for (let i = 0; i < count; i++) {
    const command = readStr();

    if (command) {
      commands.push(command);
    }
  }

  return commands;
}

class Deque {
  static ERROR_MESSAGE = 'error'

  constructor(maxSize) {
    this.maxSize = maxSize;
    this.values = Array.from({ length: maxSize }).map((_) => null);
    this.startIndex = 0;
    this.endIndex = 0;
    this.size = 0;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get isFull() {
    return this.size === this.maxSize;
  }

  pushFront(value) {
    if (this.isFull) {
      return Deque.ERROR_MESSAGE;
    }

    this.startIndex = (this.startIndex - 1 + this.maxSize) % this.maxSize;
    this.values[this.startIndex] = value;
    this.size++;
  }

  pushBack(value) {
    if (this.isFull) {
      return Deque.ERROR_MESSAGE;
    }

    this.values[this.endIndex] = value;
    this.endIndex = (this.endIndex + 1) % this.maxSize;
    this.size++;
  }

  popFront() {
    if (this.isEmpty) {
      return Deque.ERROR_MESSAGE;
    }

    const value = this.values[this.startIndex];
    this.startIndex = (this.startIndex + 1) % this.maxSize;
    this.size--;

    return value;
  }

  popBack() {
    if (this.isEmpty) {
      return Deque.ERROR_MESSAGE;
    }

    this.endIndex = (this.endIndex - 1 + this.maxSize) % this.maxSize;
    const value = this.values[this.endIndex];
    this.size--;

    return value;
  }
}

function getCommandResults(commandCount, dequeSize, commands) {
  const results = [];

  const deque = new Deque(dequeSize);

  for (let i = 0; i < commandCount; i++) {
    let [action, value] = commands[i].split(" ");

    if (value) {
      value = Number(value);
    }

    switch (action) {
      case "push_front":
        const frontValue = deque.pushFront(value);

        if (frontValue === "error") {
          results.push(frontValue);
        }

        break;
      case "push_back":
        const backValue = deque.pushBack(value);

        if (backValue === "error") {
          results.push(backValue);
        }

        break;
      case "pop_front":
        results.push(deque.popFront());
        break;
      case "pop_back":
        results.push(deque.popBack());
        break;
      default:
        break;
    }
  }

  return results;
}

function run() {
  const n = readNum();
  const m = readNum();
  const commands = getCommands(n);

  const commandResults = getCommandResults(n, m, commands);

  commandResults.forEach((result) => {
    console.log(result);
  })
}

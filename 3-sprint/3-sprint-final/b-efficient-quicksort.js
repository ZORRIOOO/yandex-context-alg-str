// Комментарий:
/*
-- ПРИНЦИП РАБОТЫ --
Мое решение представляет из себя сортировку участников по количеству решенных задач, штрафным баллам и логину.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Сортировка реализована с помощью алгоритма быстрой сортировки, который эффективен и доказанно корректен.
Есть дополнительные функции, такие как compare() для сравния, которая учитывает все необходимые
условия в правильной сортировки.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Алгоритм имеет временную сложность O(N log N) в худшем случае, где N - количество участников.
Худший случай для такой временной сложности будет возможен,
если массив уже отсортирован в обратном порядке относительно всех параметров.
Так алгоритм быстрой сортировки не сможет использовать преимущества
правильно разделенных подмассивов.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
В решение я использовал минимальное количество дополнительной памяти,
что ограничивает пространственную сложность на O(1).
Исключением остается память O(log N), которую мы выделяем для стека вызовов рекурсии,
*/

// Отчет: https://contest.yandex.ru/contest/23815/run-report/113530604/

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

function readParams() {
  const params = _inputLines[_curLine].trim().split(" ");

  _curLine++;

  return params;
}

function getParticipants(n) {
  const participants = [];

  for (let i = 0; i < n; i++) {
    const params = readParams();

    if (params.length > 0) {
      const [login, solved, fine] = params;

      participants.push({
        login,
        solved: Number(solved),
        fine: Number(fine)
      });
    }
  }

  return participants;
}

function sortParticipants(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }

  const pivotIndex = partition(array, left, right);

  sortParticipants(array, left, pivotIndex - 1);
  sortParticipants(array, pivotIndex + 1, right);
}

function partition(array, left, right) {
  const pivot = array[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (compare(array[j], pivot) < 0) {
      swap(array, i, j);
      i++;
    }
  }

  swap(array, i, right);

  return i;
}

function swap(array, i, j) {
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
}

function compare(a, b) {
  if (a.solved !== b.solved) {
    return b.solved - a.solved;
  } else if (a.fine !== b.fine) {
    return a.fine - b.fine;
  } else {
    return a.login.localeCompare(b.login);
  }
}

function run() {
  const n = readNum();
  const participants = getParticipants(n);

  sortParticipants(participants);

  participants.forEach(({ login }) => {
    console.log(login);
  });
}

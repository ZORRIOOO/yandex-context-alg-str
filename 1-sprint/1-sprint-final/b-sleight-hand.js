// Отчет: https://contest.yandex.ru/contest/22450/run-report/110739033/
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

function readInt() {
  const n = Number(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function readArray() {
  const arr = _inputLines[_curLine].trim().split("");

  _curLine++;

  return arr;
}

function readMatrix() {
  const matrix = [];

  for (let i = 0; i < 4; i++) {
    const row = readArray();

    matrix.push(row);
  }

  return matrix;
}

function countScores(
  k,
  field
) {
  let scores = 0;
  const players = 2;
  const symbols = "123456789";
  const pressedButtons = Array.from({ length: symbols.length }).map((_) => 0);

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      const symbolIndex = symbols.indexOf(field[i][j]);

      if (symbolIndex !== -1) {
        pressedButtons[symbolIndex]++;
      }
    }
  }

  for (let i = 0; i < pressedButtons.length; i++) {
    if (pressedButtons[i] <= k * players && pressedButtons[i] !== 0) {
      scores++;
    }
  }

  return scores;
}

function run() {
  const keys = readInt();
  const field = readMatrix()

  const scores = countScores(keys, field);

  console.log(scores);
}
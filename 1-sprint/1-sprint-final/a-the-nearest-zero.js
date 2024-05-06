// Отчет: https://contest.yandex.ru/contest/22450/run-report/110735095/
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
  const arr = _inputLines[_curLine].trim().split(" ").map(num => Number(num));

  _curLine++;

  return arr;
}

function calculateDistances(
  n,
  array
) {
  const distances = [];

  let emptyIndex = null;
  let i = 0;
  while (i < n) {
    if (array[i] === 0) {
      emptyIndex = i;
    }

    if (emptyIndex !== null) {
      distances.push(i - emptyIndex);
    } else {
      distances.push(n);
    }

    i++;
  }

  let newEmptyIndex = null;
  let j = n - 1;
  while (j >= 0) {
    if (distances[j] === 0) {
      newEmptyIndex = j;
    }

    if (newEmptyIndex !== null) {
      distances[j] = Math.min(distances[j], newEmptyIndex - j);
    } else {
      distances[j] = Math.min(distances[j], n);
    }

    j--;
  }

  return distances.join(" ");
}

function run() {
  const streetLength = readInt();
  const houses = readArray();

  const distances = calculateDistances(streetLength, houses);

  console.log(distances);
}
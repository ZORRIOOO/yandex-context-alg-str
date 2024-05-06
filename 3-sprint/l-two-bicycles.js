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

function readArray() {
  const arr = _inputLines[_curLine].trim().split(" ").map(num => Number(num));

  _curLine++;

  return arr;
}

function searchDay(array, s, left, right, target) {
  if (left > right) {
    return target;
  }

  const mid = Math.floor((left + right) / 2);
  const amount = array[mid];

  if (amount >= s) {
    target = mid + 1;
    return searchDay(array, s, left, mid - 1, target);
  } else {
    return searchDay(array, s, mid + 1, right, target);
  }
}

function getDays(n, array, s) {
  const firstDay = searchDay(array, s, 0, n - 1, -1);
  const secondDay = searchDay(array, s * 2, 0, n - 1, -1);

  return [firstDay, secondDay];
}

function run() {
  const n = readNum();
  const array = readArray();
  const s = readNum();

  const days = getDays(n, array, s);

  console.log(days.join(" "));
}
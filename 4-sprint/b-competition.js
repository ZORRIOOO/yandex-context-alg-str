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

function getRoundsSegment(n, array) {
  const rounds = new Map();

  rounds.set(0, -1);

  let max = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const round = array[i];

    sum += round === 0 ? 1 : -1;

    if (rounds.has(sum)) {
      const length = i - rounds.get(sum);

      if (length > max) {
        max = length;
      }
    } else {
      rounds.set(sum, i);
    }
  }


  return max;
}

function run() {
  const rounds = readNum();
  const results = readArray();

  const roundsSegment = getRoundsSegment(rounds, results);

  console.log(roundsSegment);
}
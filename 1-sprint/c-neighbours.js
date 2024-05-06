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


function getResult(
  matrix,
  x,
  y
) {
  const result = [];

  for (const [row, column] of [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1]
  ]) {
    if (
      row >= 0 &&
      row < matrix.length &&
      column >= 0 &&
      column < matrix[0].length
    ) {
      const neighbour = matrix[row][column];

      if (Number.isInteger(neighbour)) {
        result.push(neighbour);
      }
    }
  }


  return result.sort((a, b) => a - b).join(" ");
}

function run() {
  const rows = readInt();
  const columns = readInt();
  const matrix = [];

  Array.from( { length: rows } ).forEach((_r) => {
    const row = readArray();

    if (columns === row.length) {
      matrix.push(row);
    }
  })

  const positionX = readInt();
  const positionY = readInt();

  const result = getResult(
    matrix,
    positionX,
    positionY
  );

  console.log(result);
}
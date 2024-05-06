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

function readMatrix(m) {
  const matrix = [];

  for (let i = 0; i < m; i++) {
    const row = readArray();

    matrix.push(row);
  }

  return matrix;
}

function getTransposedMatrix(
  rows,
  cols,
  matrix
) {
  const transposedMatrix = [];

  for (let i = 0; i < cols; i++) {
    const row = [];

    for (let j = 0; j < rows; j++) {
      const value = matrix[j][i];

      if (value !== undefined) {
        row.push(value)
      }
    }

    transposedMatrix.push(row)
  }

  return transposedMatrix;
}

function run() {
  const m = readNum();
  const n = readNum();
  const matrix = readMatrix(m);

  const result = getTransposedMatrix(m, n, matrix);

  result.forEach((r) => {
    console.log(r.join(" "));
  })
}
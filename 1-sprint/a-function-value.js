const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', run);

function getAnswer(a, x, b, c) {
  // y = ax2 + bx + c
  const first = a * Math.pow(x, 2);
  const second = b * x;
  const third = c;

  return first + second + third;
}

function run() {
  const [a, x, b, c] = _inputLines[0].trim().split(" ").map(num => Number(num));

  const answer = getAnswer(a, x, b, c);

  console.log(answer);
}
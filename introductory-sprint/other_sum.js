const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
  const list = _inputLines[0].trim().split(" ").map(num => Number(num));
  const a = list[0];
  const b = list[1];

  const answer = a + b;

  console.log(answer);
}
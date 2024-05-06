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

function generateBracketSeq(sequence, open, close, n, bracketSequence) {
  if (sequence.length === n * 2) {
    bracketSequence.push(sequence);

    return;
  }

  if (open < n) {
    generateBracketSeq(sequence + '(', open + 1, close, n, bracketSequence);
  }

  if (close < open) {
    generateBracketSeq(sequence + ')', open, close + 1, n, bracketSequence);
  }
}

function getBracketSeq(n) {
  const bracketSequence = [];

  generateBracketSeq("", 0, 0, n, bracketSequence);

  return bracketSequence;
}

function run() {
  const n = readNum();

  const bracketSequence = getBracketSeq(n);

  bracketSequence.forEach((brackets) => {
    console.log(brackets);
  })
}
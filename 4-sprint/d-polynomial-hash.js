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

function readStr() {
  const str = String(_inputLines[_curLine]);

  _curLine++;

  return str;
}

function getHash(a, m, s) {
  let hash = 0;
  let base = a % m;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);

    hash = (hash * base + charCode) % m;
  }

  return hash;
}

function run() {
  const a = readNum();
  const m = readNum();
  const s = readStr();

  const result = getHash(a, m, s);

  console.log(result)
}
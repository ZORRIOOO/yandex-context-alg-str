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

function readStr() {
  const n = String(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function isSubsequence(s, t, m, n) {
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === m ? "True" : "False";
}

function run() {
  const s = readStr();
  const t = readStr();

  const result = isSubsequence(s, t, s.length, t.length);

  console.log(result);
}
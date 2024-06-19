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
  const str = String(_inputLines[_curLine]);

  _curLine++;

  return str;
}

function compareStrings(s, t) {
  if (s.length !== t.length) {
    return "NO";
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!map.has(charS)) {
      map.set(charS, charT);
    }

    if (map.get(charS) !== charT) {
      return "NO";
    }
  }

  const values = map.values();
  const set = new Set(values);

  return set.size === map.size ? "YES" : "NO";
}

function run() {
  const s = readStr();
  const t = readStr();

  const result = compareStrings(s, t);

  console.log(result)
}
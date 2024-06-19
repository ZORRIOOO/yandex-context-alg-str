const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const inputLines = [];
let curLine = 0;

reader.on('line', line => {
  inputLines.push(line);
});

reader.on('close', run);

function readNum() {
  const n = Number(inputLines[curLine]);

  curLine++;

  return n;
}

function readStr() {
  const str = String(inputLines[curLine]);

  curLine++;

  return str;
}

function readArray() {
  const arr = inputLines[curLine].trim().split(" ").map(num => Number(num));

  curLine++;

  return arr;
}

function getIndexes(t) {
  const indexes = [];

  for (let i = 0; i < t; i++) {
    const [start, end] = readArray();

    indexes.push([start, end]);
  }

  return indexes;
}

function getHashes(a, m, s, t, indexes) {
  const base = a % m;
  const len = s.length;
  const powers = new Array(len + 1).fill(1);
  for (let i = 1; i <= len; i++) {
    powers[i] = (powers[i - 1] * base) % m;
  }

  const hashes = [];

  for (let i = 0; i < t; i++) {
    const [start, end] = indexes[i];
    let hash = 0;
    for (let j = start - 1; j < end; j++) {
      const charCode = s.charCodeAt(j);
      hash = (hash + charCode * powers[j - start + 1]) % m;
    }
    hashes.push(hash);
  }

  return hashes;
}

function run() {
  const a = readNum();
  const m = readNum();
  const s = readStr();
  const t = readNum();
  const indexes = getIndexes(t);

  const hashes = getHashes(a, m, s, t, indexes);

  hashes.forEach((hash) => {
    console.log(hash);
  });
}

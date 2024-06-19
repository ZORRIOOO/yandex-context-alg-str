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

function readArray() {
  const arr = inputLines[curLine].trim().split(" ").map(num => Number(num));

  curLine++;

  return arr;
}

function getSums(n, s, array) {
  let sorted = [...array];
  sorted.sort((a, b) => a - b);

  const fours = new Set();

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = sorted[i] + sorted[j] + sorted[left] + sorted[right];

        if (sum === s) {
          fours.add([sorted[i], sorted[j], sorted[left], sorted[right]]);
          left++;
          right--;
        } else if (sum < s) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  const uniqueFours = [];
  const seen = new Set();

  fours.forEach((quadruple) => {
    const key = quadruple.join(',');

    if (!seen.has(key)) {
      uniqueFours.push(quadruple);
      seen.add(key);
    }
  });

  return uniqueFours;
}

function run() {
  const n = readNum();
  const S = readNum();
  const numbers = readArray();

  const sums = getSums(n, S, numbers);

  console.log(sums.length);
  sums.forEach((sum) => {
    console.log(sum.join(" "));
  });
}
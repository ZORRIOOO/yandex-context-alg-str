function getEqualStringsByHash(a, m, MAX = 1000, CHAR_START = 97, CHAR_MAX = 122) {
  const dictionary = new Map();

  for (let start = 1; start <= MAX; start++) {
      for (let charCode = CHAR_START; charCode <= CHAR_MAX; charCode++) {
        const string = String.fromCharCode(charCode).repeat(start);
        const hash = getHash(a, m, string);

        if (dictionary.has(hash)) {
          return [string, dictionary.get(hash)];
        }

        dictionary.set(hash, string);
      }
  }

  return [];
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
  const a = 1000;
  const m = 123987123;

  const strings = getEqualStringsByHash(a, m);

  strings.forEach((string) => {
    console.log(string)
  });
}

run();
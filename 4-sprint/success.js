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
  return Number(inputLines[curLine++]);
}

function readStr() {
  return String(inputLines[curLine++]);
}

function getArray(n) {
  const array = [];

  for (let i = 0; i < n; i++) {
    const str = readStr();

    array.push(str);
  }

  return array;
}

function buildIndex(n, documents) {
  const index = {};

  for (let i = 0; i < n; i++) {
    const words = documents[i].split(' ');
    for (const word of words) {
      if (!index[word]) {
        index[word] = {};
      }

      index[word][i + 1] = (index[word][i + 1] || 0) + 1;
    }
  }

  return index;
}

function searchInIndex(index, m, requests) {
  const MOST_RELEVANT_DOCUMENTS = 5;
  const result = [];

  for (let i = 0; i < m; i++) {
    const reqWords = [...new Set(requests[i].split(' '))]
    const relevanceDocs = {};

    for (const word of reqWords) {
      if (index[word]) {
        Object.keys(index[word]).forEach(docIndex => {
          relevanceDocs[docIndex] = (relevanceDocs[docIndex] || 0) + index[word][docIndex];
        });
      }
    }

    const topDocs = [];

    Object.keys(relevanceDocs).forEach(docIndex => {
      topDocs.push({ docIndex: parseInt(docIndex), relevance: relevanceDocs[docIndex] });
    });

    const sortedTopDocs = topDocs.sort((a, b) => {
      if (b.relevance === a.relevance) {
        return a.docIndex - b.docIndex;
      }

      return b.relevance - a.relevance;
    });
    const topDocIndexes = sortedTopDocs.slice(0, MOST_RELEVANT_DOCUMENTS).map(doc => doc.docIndex);

    result.push(topDocIndexes);
  }

  return result;
}

function searchEngine(n, documents, m, requests) {
  const index = buildIndex(n, documents);

  return searchInIndex(index, m, requests);
}

function run() {
  const n  = readNum();
  const documents = getArray(n);
  const m  = readNum();
  const requests = getArray(m);
  const relevantDocuments = searchEngine(n, documents, m, requests);

  relevantDocuments.forEach((document) => console.log(document.join(" ")))
}
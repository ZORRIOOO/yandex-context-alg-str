// Комментарий:
/*
-- ПРИНЦИП РАБОТЫ --
Мое решенеие выполняет поиск запросов в документах с использованием построения индекса слов.
На основе входных данных создается индекс, где каждому слову соответствует множество документов, в которых оно встречается.
Затем для каждого запроса находятся наиболее релевантные документы на основе количества совпадений слов из запроса с индексом.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Решение основано на поиске по индексу, что обеспечивает корректность поиска документов по запросам.
Кроме того, для каждого запроса выбираются наиболее релевантные документы на основе количества совпадений слов,
что улучшает точность поиска.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Построение индекса имеет временную сложность O(N * M), где N - количество документов,
а M - средняя длина документа в словах.
Запрос средней длины состоит из K слов, а ищем в индексе мы K слов. Затем для каждого слова в
запросе мы проходим по хэш-таблице, которая в худшем случае содержит все документы.
Для каждого запроса средней длины К слов, мы ищем в индексе К слов.
После происхожит сортировка документов по условию, что занимает O (N log N).
Для каждого запроса алгоритм проходится по каждому слову из него, а в худшем случае для каждого слова
запроса будет N документов, которые нужно отсортировать, что приводит
к временной сложности шага в O(R * (K * N + N * log N)), где R - количество запросов.
Общая временная сложность всего алгоритма будет составлять: O(N * M + K * N log N)

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Для построения индекса я использовал дополнительную структуру данных - хэш-таблицу, которая занимает дополнительную память
на O(N * M), где N - количество документов, а M - средняя длина документа в словах.
Для каждого запроса создается отдельная структура, содержащая слова запроса.
Это занимает O(K) дополнительной памяти, где K - средняя длина запроса.
При поиске по индексу пространственная сложность будет составлять O(K * MOST_RELEVANT_DOCUMENTS * M),
где K - средняя длина запроса, R - количество запросов, a MOST_RELEVANT_DOCUMENTS - константа (в данном случае равная 5).
Общая пространственная сложность: O(N * M + K * MOST_RELEVANT_DOCUMENTS * R)
*/

// Отчет: https://contest.yandex.ru/contest/24414/run-report/113902647/

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
        Object.keys(index[word]).forEach((docIndex) => {
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
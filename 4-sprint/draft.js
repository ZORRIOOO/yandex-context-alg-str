function buildIndex(documents) {
  const index = new Map();
  documents.forEach((doc, docIndex) => {
    const words = doc.split(" ");
    words.forEach(word => {
      if (!index.has(word)) {
        index.set(word, new Set());
      }
      index.get(word).add(docIndex);
    });
  });
  return index;
}

function calculateRelevance(query, documents) {
  const relevanceMap = new Map();
  query.forEach(word => {
    if (index.has(word)) {
      index.get(word).forEach(docIndex => {
        if (!relevanceMap.has(docIndex)) {
          relevanceMap.set(docIndex, 0);
        }
        relevanceMap.set(docIndex, relevanceMap.get(docIndex) + 1);
      });
    }
  });
  return Array.from(relevanceMap.entries())
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .map(entry => entry[0]);
}

function search(index, queries) {
  const results = [];
  queries.forEach(query => {
    const queryWords = query.split(" ");
    const relevantDocs = calculateRelevance(queryWords, index);
    results.push(relevantDocs.slice(0, 5).join(" "));
  });
  return results;
}

// Пример использования

const n = 3;
const documents = [
  "i love coffee",
  "coffee with milk and sugar",
  "free tea for everyone"
];
const m = 3;
const queries = [
  "i like black coffee without milk",
  "everyone loves new year",
  "mary likes black coffee without milk"
];

const index = buildIndex(documents);
const searchResults = search(index, queries);
searchResults.forEach(result => console.log(result));

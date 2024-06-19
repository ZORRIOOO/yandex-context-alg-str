function siftUp(heap, idx) {
  if (idx === 1) {
    return 1;
  }

  const parentIdx = Math.floor(idx / 2);

  if (heap[parentIdx] < heap[idx]) {
    [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];

    return siftUp(heap, parentIdx);
  }

  return idx;
}

function test() {
  var sample = [-1, 12, 6, 8, 3, 15, 7];

  console.assert(siftUp(sample, 5) === 1);
}

test();
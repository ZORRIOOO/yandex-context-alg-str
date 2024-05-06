function merge(arr, left, mid, right) {
  let leftArr = arr.slice(left, mid);
  let rightArr = arr.slice(mid, right);

  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

  return arr;
}

function merge_sort(arr, left = 0, right = arr.length) {
  if (right - left <= 1) {
    return;
  }

  let mid = Math.floor((left + right) / 2);

  merge_sort(arr, left, mid);
  merge_sort(arr, mid, right);

  return merge(arr, left, mid, right);
}

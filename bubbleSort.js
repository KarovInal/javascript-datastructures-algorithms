function comparator(a, b) {
  return a - b;
}

//Сртировка пузырьком O(n^2)
function bubbleSort(arr, cmp) {
  cmp = cmp || comparator;
  var temp;
  for (var i = 0, l = arr.length; i < l; i++) {
    for (var j = i; j > 0; j--) {
      if (cmp(arr[j], arr[j - 1]) < 0) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};

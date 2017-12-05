function comparator(a, b) {
  return a - b;
}

//Сортировка пузырьком O(n^2)
function bubbleSort(arr, cmp) {
  cmp = cmp || comparator;
  var temp;
  for (var i = 0, l = arr.length; i < l; i++) {
    for (var j = i; j > 0; j--) {
      //Сравниваем элементы массива
      if (cmp(arr[j], arr[j - 1]) < 0) {
        //Меняем местами элементы массива
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};

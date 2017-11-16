//Поиск наименьшего элемента в массиве
function findSmallest(arr) {
	let smallest = arr[0];
	let smallest_index = 0;

	for(let i = arr.length; i > 0; i--) {
		if(arr[i] < smallest) {
			smallest = arr[i];
			smallest_index = i;

			return smallest_index;
		}
	}
}

//Сортировка выбором
//Время выполнения O(n^2)
function selectionSort(arr) {
	let newArr = [];
  
	for(let i = arr.length; i > 0; i--) {
  //Найдем наименьший элемент массива и добавим его в новый массив
		let smallest = findSmallest(arr);
		newArr.push(...arr.splice(smallest, 1));
	}

	return newArr;
}

// Бинарный поиск
function binarySearch(values, target) {
	//Отсортируем список
	let sortValues = [...values].sort((a, b) => a - b);
	
	//В low и high хранятся границы той части списка, в которой выполняется поиск
	let low = 0;
	let high = sortValues.length - 1;


	//Пока это часть не сократится до одного элемента...
	while (low <= high) {
		// Проверяем средний элемент
		let mid = Math.floor((low + high) / 2);

		// Проверяем, в какой половине вести поиск - левой или правой
		if (sortValues[mid] > target) {
			high = mid - 1; //Много
		} else if (sortValues[mid] < target) {
			low = mid + 1;  //Мало
		} else {
			return mid; //Значение найдено
		}
	}

	//Значение не существует
	return -1;
}

		/*
    Быстрая сортировка
    Время выполнения:
        средний случай O(nlogn)
        худший случай O(n^2)
    */
    function quickSort(arr) {
			let len = arr.length;
			//Базовый случай, массив уже отсортирован
			if (len < 2) {
				return arr;
			}

			let i = len - 2;
			let less = [];
			let greater = [];
			let del = arr.splice(Math.round(len / 2), 1);
      
      //Точка опоры => средний элемент
			let pivot = +del.join();

			// debugger;

			while (i >= 0) {
				
				if (arr[i] <= pivot) {
					//Подмассив всех элементов, мешьше опорного
					less.push(arr[i]);
				}

				if (arr[i] > pivot) {
					//Подмассив всех элементов, больше опорного
					greater.push(arr[i]);
				}

				i--;
			}

			return [...quickSort(less), ...[pivot], ...quickSort(greater)];
		}


		var array = [2, 4, 7, 3, 12, 11, 23, 45, 23, 1, 5, 7, 7, 3, 34, 456, 678, 23434, 676, 32, 12, 1, 3, 4, 5];


		console.time('startQuickSort')

			console.log(quickSort([...array]));

		console.timeEnd('startQuickSort')

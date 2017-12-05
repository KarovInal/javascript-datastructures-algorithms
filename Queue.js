//Очередь
class Queue {
  constructor() {
    this.data = [];
  }

  //Добавить в очередь O(1)
  enqueue(item) {
    this.data.push(item);
  }

  //Убрать из очереди O(1)
  dequeue() {
    return this.data.shift();
  }

  size() {
    return this.data.length;
  }

  font() {
    return this.data[0];
  }

  isAmpty() {
    return this.data.length === 0;
  }

  print() {
    return this.data;
  }
}

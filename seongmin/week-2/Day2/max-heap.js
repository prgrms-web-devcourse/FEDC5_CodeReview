class Heap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];

      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const value = this.heap[1];

    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];

        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];

        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;

        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return value;
  }
}

const heap = new Heap();

heap.push(13);
heap.push(15);
heap.push(24);
heap.push(82);
heap.push(49);
heap.push(66);
heap.push(1);

console.log(heap.heap);

heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);
heap.pop();

console.log(heap.heap);

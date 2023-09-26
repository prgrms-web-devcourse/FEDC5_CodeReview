class MaxHeap {
    heap = [null];

    push(v) {
        this.heap.push(v);
        let cur = this.heap.length - 1;
        let parent = Math.floor(cur / 2);

        while (parent !== 0 && this.heap[parent] < v) {
            this.#swap(parent, cur);

            cur = parent;
            parent = Math.floor(cur / 2);
        }
    }

    pop() {
        if (this.heap.length === 1) return null;
        if (this.heap.length === 2) return this.heap.pop();

        const value = this.heap[1];
        this.heap[1] = this.heap.pop();
        let cur = 1;
        let left = 2;
        let right = 3;

        while (this.heap[cur] < this.heap[left] || this.heap[cur] < this.heap[right]) {
            if (this.heap[left] < this.heap[right]) {
                this.#swap(right, cur);
                cur = right;
            } else {
                this.#swap(left, cur);
                cur = left;
            }
            left = cur * 2;
            right = cur * 2 + 1;
        }
        return value;
    }

    #swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

const maxHeap = new MaxHeap();
maxHeap.push(1);
maxHeap.push(5);
maxHeap.push(8);
maxHeap.push(7);
maxHeap.push(3);
console.log(maxHeap);
maxHeap.pop();
console.log(maxHeap);
maxHeap.pop();
console.log(maxHeap);
maxHeap.pop();
console.log(maxHeap);
maxHeap.pop();
console.log(maxHeap);
maxHeap.pop();
console.log(maxHeap);

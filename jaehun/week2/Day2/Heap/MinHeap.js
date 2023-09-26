class MinHeap {
    heap = [null];

    push(v) {
        this.heap.push(v);

        let cur = this.heap.length - 1;
        let parent = Math.floor(cur / 2);

        while (!parent && this.heap[parent] > v) {
            this.#swap(cur, print);
            cur = parent;
            parent = Math.floor(cur / 2);
        }
    }

    pop() {
        if (this.heap.length === 1) return null;
        if (this.heap.length === 2) return this.heap.pop();

        const v = this.heap[1];
        this.heap[1] = this.heap.pop();

        let cur = 1;
        let left = 2;
        let right = 3;

        while (this.heap[cur] > this.heap[right] || this.heap[cur] > this.heap[left]) {
            // undefined랑 비교하면 항상 false나옴
            if (this.heap[right] < this.heap[left]) {
                this.#swap(cur, right);
                cur = right;
            } else {
                this.#swap(cur, left);
                cur = left;
            }

            left = cur * 2;
            right = cur * 2 + 1;
        }
        return v;
    }

    #swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

const minHeap = new MinHeap();
minHeap.push(1);
minHeap.push(5);
minHeap.push(8);
minHeap.push(7);
minHeap.push(3);
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);

class Que {
    que = [];
    head = 0;
    tail = 0;

    push(v) {
        this.que[this.tail++] = v;
    }

    shift() {
        const v = this.que[this.head];
        delete this.que[this.head++];
        return v;
    }

    peek() {
        return this.que[this.head];
    }

    size() {
        return this.tail - this.head;
    }
}

// que이용
function solution(priorities, location) {
    const que = new Que();
    priorities.forEach((v, i) => que.push([v, i]));
    priorities.sort((a, b) => b - a);

    let cnt = 0;
    while (que.size()) {
        if (que.peek()[0] < priorities[cnt])
            que.push(que.shift()); // 우선순위보다 작으면 뒤로 뺌
        else {
            cnt++;
            if (que.shift()[1] === location) return cnt; // 같으면 종료
        }
    }
}

// array이용
function solution(priorities, location) {
    const que = priorities.map((v, i) => [v, i]);

    priorities.sort((a, b) => b - a); // 내림차순
    let cnt = 0;
    while (1) {
        if (que[0][0] < priorities[cnt])
            que.push(que.shift()); // 우선순위보다 작으면 뒤로 뺌
        else {
            cnt++;
            if (que[0][1] === location) return cnt; // 같으면 종료
            else que.shift(); // 다르면 그냥 빼기만
        }
    }
}

console.log(solution([2, 1, 3, 2], 2));

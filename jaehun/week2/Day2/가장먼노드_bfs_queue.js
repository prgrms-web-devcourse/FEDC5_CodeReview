class Que {
    q = [];
    h = 0;
    t = 0;

    push(v) {
        this.q[this.t++] = v;
    }
    shift() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    length() {
        return this.t - this.h;
    }
}

// bfs - 배열
function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => new Array());

    for (const [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    // console.log(graph);
    const visited = new Array(n + 1).fill(0);

    (function bfs(str) {
        const que = new Que();
        visited[str] = 1;
        que.push(str);

        while (que.length()) {
            const cur = que.shift();
            for (const next of graph[cur]) {
                if (!visited[next]) {
                    que.push(next);
                    visited[next] = visited[cur] + 1;
                }
            }
        }
        // console.log(visited);
    })(1);
    return visited.filter((v) => Math.max(...visited) === v).length;
}

console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ])
);

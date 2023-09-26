// dfs - 런타임 에러, 시간 초과
function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => new Array());

    for (const [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    // console.log(graph);
    const visited = new Array(n + 1).fill(0);

    (function dfs(str, dep) {
        visited[str] = dep;

        for (const next of graph[str]) {
            if (!visited[next] || visited[next] > dep) {
                // 더 짧은 거리 찾으면 변경
                dfs(next, dep + 1);
            }
        }
    })(1, 1);
    // console.log(visited);

    const max = Math.max(...visited);

    return visited.filter((v) => v === max).length;
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

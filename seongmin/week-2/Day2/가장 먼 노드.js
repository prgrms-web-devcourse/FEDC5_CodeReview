// BFS
// 정답
function solution(n, edge) {
  const arr = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => [1e9]);

  edge.forEach(([a, b]) => {
    arr[a].push(b);
    arr[b].push(a);
  });

  solve(arr, 1, visited);

  return visited.filter((item) => item === Math.max(...visited.slice(1, -1)))
    .length;

  function solve(arr, node, visited) {
    const queue = [];

    queue.push(node);
    visited[node] = 0;

    while (queue.length) {
      const curNode = queue.shift();

      arr[curNode].forEach((node) => {
        if (visited[node] > visited[curNode] + 1) {
          queue.push(node);
          visited[node] = visited[curNode] + 1;
        }
      });
    }
  }
}

// DFS로 풀었음
// 근데 멀리 있는 노드 먼저 탐색하기 때문에 에러가 발생
function solution(n, edge) {
  const arr = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => [1e9]);
  const temp = [];

  edge.forEach(([a, b]) => {
    arr[a].push(b);
    arr[b].push(a);
  });

  search(1, 0);

  return visited.filter((item) => item === Math.max(...visited.slice(1, -1)))
    .length;

  function search(node, dist) {
    if (visited[node] <= dist) return;

    visited[node] = dist;

    arr[node].forEach((node) => {
      search(node, dist + 1);
    });
  }
}

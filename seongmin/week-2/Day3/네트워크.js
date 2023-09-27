function bfs(start, arr, visited) {
  const queue = [start];

  while (queue.length) {
    const value = queue.shift();
    visited[value] = true;

    const paths = arr[value];

    if (!paths) break;

    paths.forEach((p) => {
      if (visited[p] === false) queue.push(p);
    });
  }
}

function solution(n, computers) {
  const arr = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);
  let answer = 0;

  computers.forEach((networks, idx) => {
    networks.forEach((net, i) => {
      if (idx !== i && net === 1) {
        arr[idx + 1].push(i + 1);
      }
    });
  });

  for (let i = 1; i <= arr.length; i++) {
    if (!visited[i]) {
      bfs(i, arr, visited);
      answer += 1;
    }
  }

  return answer - 1;
}

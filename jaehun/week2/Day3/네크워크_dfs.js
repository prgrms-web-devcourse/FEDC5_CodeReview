// 트리의 개수 구하기
function solution(n, computers) {
    for (let i = 0; i < computers.length; i++) computers[i][i] = 0;

    const visited = new Array(n).fill(false);

    function dfs(cur) {
        visited[cur] = true;

        for (let i = 0; i < computers[cur].length; i++) {
            if (computers[cur][i]) {
                computers[cur][i] = 0;
                computers[i][cur] = 0;
                dfs(i);
            }
        }
    }

    let ans = 0;
    for (let i = 0; i < computers.length; i++) {
        if (!visited[i]) {
            dfs(i);
            ans++;
        }
    }
    return ans;
}

console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ])
); // 2
console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
    ])
); // 1

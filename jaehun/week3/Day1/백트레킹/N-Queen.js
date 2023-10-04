function solution(n) {
    let cnt = 0;

    const check = (q, n) => {
        for (let i = 0; i < n; i++)
            if (q[i] === q[n] || Math.abs(q[i] - q[n]) === Math.abs(n - i)) return false;
        return true;
    };

    function dfs(q, n) {
        const len = q.length;
        if (n === len) {
            cnt++;
            return;
        }

        for (let i = 0; i < len; i++) {
            q[n] = i; // i 는 열의정보
            if (check(q, n)) dfs(q, n + 1);
        }
    }

    dfs(new Array(n), 0);

    return cnt;
}

console.log(solution(5));

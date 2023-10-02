function solution(strs, t) {
    const n = t.length;
    const dp = new Array(n + 1).fill(Infinity);

    // t를 하나씩 짤라서 비교
    for (let i = 1; i <= n; i++) {
        const curStr = t.substring(0, i);
        // strs의 단어들 하나씩과 비교
        for (const str of strs) {
            if (curStr.endsWith(str)) {
                const diff = curStr.length - str.length;
                // diff가 0이면 동일한 단어가 있음, 아니면 차이에 해당하는 단어
                dp[i] = !diff ? 1 : Math.min(dp[i], dp[diff] + 1);
            }
        }
    }
    console.log(dp);
    return dp.at(-1) === Infinity ? -1 : dp.at(-1);
}

console.log(solution(["ba", "na", "n", "a"], "banana")); //3
console.log(solution(["app", "ap", "p", "l", "e", "ple", "pp"], "apple")); // 2
console.log(solution(["ba", "an", "nan", "ban", "n"], "banana")); // -1

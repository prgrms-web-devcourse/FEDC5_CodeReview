function solution(numbers) {
    const ans = numbers
        .map(String)
        .sort((a, b) => b + a - (a + b))
        .join("");

    //  와씨,,,
    return ans[0] === "0" ? "0" : ans;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9, 300, 303]));

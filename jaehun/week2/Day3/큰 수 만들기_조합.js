// k개 제거해서 가장 큰 수 만들기
// 시간 초과...
function solution(number, k) {
    const strNum = number.split("");
    let max = 0;
    const selects = [];
    function dfs(str, selects) {
        if (selects.length === k) {
            // console.log("selects:", selects);
            const result = [...strNum];
            selects.forEach((v) => (result[v] = ""));

            max = Math.max(max, result.join(""));
        }

        for (let i = str; i < number.length; i++) {
            selects.push(i);
            dfs(i + 1, selects);
            selects.pop();
        }
    }

    for (let i = 0; i < strNum.length; i++) {
        dfs(i, selects);
    }

    return String(max);
}

console.log(solution("1924", 2)); // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"

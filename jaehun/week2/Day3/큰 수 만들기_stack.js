// k개 제거해서 가장 큰 수 만들기
function solution(number, k) {
    let delCnt = 0;
    const stack = [];

    // 현재 값 보다 작은 앞에 값 모두 제거, 크면 넘어가기
    for (const num of number) {
        while (stack[stack.length - 1] < num) {
            if (delCnt >= k) break;
            delCnt++;
            stack.pop();
        }

        stack.push(num);
    }

    // 뒤에서부터 제거하기
    return delCnt === k
        ? stack.join("")
        : stack.slice(0, stack.length - (k - delCnt)).join("");
}

console.log(solution("1924", 2)); // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"
console.log(solution("987121", 2)); // "9872"

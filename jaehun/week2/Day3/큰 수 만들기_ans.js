function solution(number, k) {
    const stack = [];
    let cnt = 0;

    for (const num of number) {
        while (cnt < k && stack[stack.length - 1] < num) {
            cnt++;
            stack.pop();
        }

        stack.push(num);
    }

    while (cnt < k) {
        stack.pop();
        cnt += 1;
    }
    // 뒤에서부터 제거하기
    return stack.join("");
}

console.log(solution("1924", 2)); // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"
console.log(solution("987121", 2)); // "9872"

// 10억명 => 선형 불가 => logN으로 풀어야함 => 이진탐색
// 특정 값을 찾는게 아니라 최소 시간을 구함 => 결정문제
//
// 이진 탐색
function solution(n, times) {
    const sortedTimes = times.sort((a, b) => a - b);
    let left = 1;
    let right = sortedTimes[sortedTimes.length - 1] * n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const sum = times.reduce((total, now) => total + Math.floor(mid / now), 0);

        if (sum < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

// console.log(solution(2, [8, 10]));
console.log(solution(6, [7, 10]));

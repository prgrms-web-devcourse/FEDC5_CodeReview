/**
 * 1 < n < 1_000_000_000
 * 1 < times[n] < 1_000_000_000
 * 1 < times.length < 100_000
 */

// 이진 탐색
function solution(n, times) {
    let min = 0;
    let max = Math.min(...times) * n + 1;
    let mid = Math.floor((min + max) / 2);

    while (min <= max) {
        // console.log("min, mid, max", min, mid, max);
        // 찾으면 종료
        if (passPeople(times, mid) === n) {
            let minDiff = 1e9;
            for (const t of times) {
                minDiff = Math.min(minDiff, mid % t);
            }
            return mid - minDiff > 0 ? mid - minDiff : 0;
        }

        // 찾는값이 mid 보다 크면 min 옮김
        if (passPeople(times, mid) < n) {
            min = mid + 1;
        }

        // 찾는값이 mid 보다 작으면 max 옮김
        if (passPeople(times, mid) > n) {
            max = mid - 1;
        }

        mid = Math.floor((min + max) / 2);
    }
    return min;
}

function passPeople(times, value) {
    let sum = 0;
    for (const t of times) {
        sum += parseInt(value / t);
    }
    return sum;
}

// console.log(solution(2, [8, 10]));
console.log(solution(6, [7, 10]));

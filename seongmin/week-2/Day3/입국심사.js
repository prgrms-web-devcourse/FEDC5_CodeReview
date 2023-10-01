function solution(n, times) {
  let answer = 0;
  times.sort((a, b) => a - b);

  let l = 1;
  let r = times[0] * n;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let cnt = 0;

    for (const t of times) {
      cnt += Math.floor(mid / t);

      if (cnt > n) break;
    }

    if (cnt < n) {
      l = mid + 1;
    } else {
      r = mid - 1;
      answer = mid;
    }
  }

  return answer;
}

function solution(n, times) {
  let [l, r] = [0, Math.max(...times) * n];
  let mid = 0;
  
  while (l <= r) {
      let cnt = 0;
      mid = Math.floor((l + r) / 2);
      
      for (const time of times) {
          cnt += Math.floor(mid / time);
      }
      
      if (cnt >= n) {
          r = mid - 1;
      } else {
          l = mid + 1;
      }
  }
  return l;
}
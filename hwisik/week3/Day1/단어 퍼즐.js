// 코드 참고
function solution(strs, t) {
  const n = t.length;
  const dp = new Array(n).fill(Infinity);
  
  for (let i = 0; i < n; i++) {
      const curr = t.substr(0, i + 1);
      
      for (const str of strs) {
          if (curr.endsWith(str)) {
              const diff = curr.length - str.length;
              
              if (!diff) {
                  dp[i] = 1;
              } else {
                  dp[i] = Math.min(dp[i], dp[diff - 1] + 1);
              }
          }
      }
  }
  
  return dp[n - 1] === Infinity ? -1 : dp[n - 1];
}
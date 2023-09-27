function solution(number, k) {
  const stack = [];
  
  for (const n of number) {
      // Before Refactoring...
      // if (stack.length === 0) {
      //     stack.push(n);
      // } else {
      //     if (k > 0) {
      //         while (stack[stack.length - 1] < n) {
      //             if (k === 0) {
      //                 break;
      //             }
      //             stack.pop();
      //             k -= 1;
      //         }
      //     }
      //     stack.push(n);
      // }
      
      // After Refactoring
      while (k > 0 && stack[stack.length - 1] < n) {
          stack.pop();
          k -= 1;
      }
      stack.push(n);
  }
  
  // 반례: "3210", k = 2 : "32" but, 예외처리가 없으면 "3210"가 반환됨.
  // k !== 0일 때 예외처리 필요.
  return k === 0 ? stack.join('') : stack.slice(0, stack.length - k).join('');
}
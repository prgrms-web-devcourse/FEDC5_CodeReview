// 코드 참고
function solution(n) {
  let ret = 0;
  
  const dfs = (board, idx) => {
      if (idx === n) {
          ret++;
          return;
      }
      
      for (let i = 1; i <= n; i++) {
          board[idx + 1] = i;
          if (check(board, idx + 1)) {
              dfs(board, idx + 1);
          }
      }
  }
  
  const check = (board, idx) => {
      for(let i = 1; i < idx; i++) {
          if (board[i] === board[idx]) return false;
          if (Math.abs(board[i] - board[idx]) === Math.abs(i - idx)) return false;
      }
      return true;
  }

  for(let i = 1; i <= n; i++) {
      const board = new Array(n + 1).fill(0);
      board[1] = i;
      dfs(board, 1);
  }

  return ret;
}
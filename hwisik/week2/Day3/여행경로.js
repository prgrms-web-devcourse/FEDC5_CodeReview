
function solution(tickets) {
    
  tickets.sort();

  const ret = [];
  const n = tickets.length;
  const check = new Array(n).fill(0);

  function dfs(cnt, prev_dst, way) {
      if (cnt === n) {
          ret.push(way);
          return;
      }

      for (const [idx, [src, dst]] of tickets.entries()) {
          if (check[idx] === 0 && prev_dst === src) {
              check[idx] = 1;
              dfs(cnt + 1, dst, [...way, dst]);
              check[idx] = 0;
          }
      }
  }
  
  for (const [idx, [src, dst]] of tickets.entries()) {
      if (src === 'ICN') {
          check[idx] = 1;
          dfs(1, dst, [src, dst]);
          check[idx] = 0;
      }
  }
  
  ret.sort();
  
  return ret[0];
}
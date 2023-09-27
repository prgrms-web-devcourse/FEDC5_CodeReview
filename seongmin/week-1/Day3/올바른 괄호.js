// 처음 푼 코드
function solution(s) {
  const arr = s.split('');
  const checker = {
    '(': -1,
    ')': 1,
  };
  let count = 0;

  while (arr.length) {
    const cur = arr.pop();

    count += checker[cur];

    if (count < 0) {
      return false;
    }
  }

  if (count !== 0) return false;

  return true;
}

// 더 효율적인 코드
function solution(s) {
  const temp = [];

  for (const cur of s) {
    if (cur === '(') temp.push(cur);
    else {
      if (temp.length === 0) return false;

      temp.pop();
    }
  }

  return temp.length === 0;
}

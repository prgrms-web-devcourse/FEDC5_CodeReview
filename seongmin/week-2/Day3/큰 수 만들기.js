function solution(number, k) {
  const arr = [];

  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k -= 1;
      arr.pop();
    }

    arr.push(number[i]);
  }

  arr.splice(number.length - k, k);

  return arr.join('');
}

// 처음 푼 코드
// 탐욕법이라길래 진짜 욕심 그득그득하게 풀어봤습니다..
function solution(number, k) {
  const res = [];
  let answer = 0;

  for (let i = 0; i < number.length - k; i++) {
    search(number[i], i + 1);
  }

  return `${answer}`;

  function search(string, idx) {
    if (idx > number.length) return;
    if (string.length === number.length - k) {
      answer = Math.max(answer, Number(string));
      return;
    }

    search(string + number[idx], idx + 1, res);
    search(string, idx + 1, res);
  }
}

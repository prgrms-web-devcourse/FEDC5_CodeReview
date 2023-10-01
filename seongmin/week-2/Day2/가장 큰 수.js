function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => b.padEnd(4, b) - a.padEnd(4, a));

  return result.join('').replace(/(^0+)/, '') || '0';
}

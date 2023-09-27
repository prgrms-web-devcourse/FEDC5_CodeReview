function solution(tickets) {
  tickets.sort();

  const numOfPaths = tickets.length;
  const result = [];
  const visited = [];
  let answer = [];

  search('ICN', 0);

  return answer;

  function search(start, count) {
    result.push(start);

    if (count === numOfPaths) {
      answer = result;

      return true;
    }

    for (let i = 0; i < numOfPaths; i++) {
      if (!visited[i] && tickets[i][0] === start) {
        visited[i] = true;
        if (search(tickets[i][1], count + 1)) return true;
        visited[i] = false;
      }
    }

    result.pop();

    return false;
  }
}

function solution(tickets) {
    const grpah = {};
    for (const [a, b] of tickets) {
        grpah[a] = grpah[a] ? [...grpah[a], b] : [b];
        grpah[b] = grpah[b] ? grpah[b] : [];
    }
    // console.log(grpah);
    Object.keys(grpah).forEach((key) => grpah[key].sort());
    // console.log(grpah);

    let list = ["ICN"];
    (function dfs(cur) {
        for (let i = 0; i < grpah[cur].length; i++) {
            // console.log("grpah[cur][i]", grpah[cur][i]);
            const next = grpah[cur][i];
            if (next) {
                list.push(next);
                grpah[cur][i] = null;
                dfs(next);
                // 모두 방문 못했으면 다른 경로
                if (list.length !== tickets.length + 1) {
                    grpah[cur][i] = next;
                    list.pop();
                }
            }
        }
    })("ICN");
    return list;
}

console.log(
    solution([
        ["ICN", "AAA"],
        ["ICN", "CCC"],
        ["CCC", "DDD"],
        ["AAA", "BBB"],
        ["AAA", "BBB"],
        ["DDD", "ICN"],
        ["BBB", "AAA"],
    ])
);
console.log(
    solution([
        ["ICN", "JFK"],
        ["HND", "IAD"],
        ["JFK", "HND"],
    ])
);
console.log(
    solution([
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"],
    ])
);

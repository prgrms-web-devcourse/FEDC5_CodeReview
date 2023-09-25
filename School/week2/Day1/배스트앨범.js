function solution(genres, plays) {
    const map = genres.reduce((map, now, i) => {
        const arr = map[now] ? map[now] : [0];
        arr[0] += plays[i];
        arr.push([plays[i], i]);

        map[now] = arr;
        return map;
    }, {});

    const tmp = [];
    for (const key of Object.keys(map)) {
        map[key].sort((a, b) => b[0] - a[0]);
        tmp.push(map[key]);
    }

    const ans = tmp
        .sort((a, b) => b[0] - a[0])
        .flatMap((genre) => genre.slice(1, 3).map((c) => c[1]));
    return ans;
}

console.log(
    solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])
);

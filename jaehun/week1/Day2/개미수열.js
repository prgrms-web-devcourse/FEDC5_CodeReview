const num = 8;

(function antSeq(seq, n) {
    if (n === 1) {
        console.log("찾았다! 개미수열!", seq);
        return;
    }
    const result = seq
        .match(/(.)\1*/g)
        .reduce((a, b) => a + `${b.length}${b.slice(0, 1)}`, "");

    antSeq(result, n - 1);
})("1", num);

function solution(box, n) {
    return box.map((num) => Math.floor(num / n)).reduce((cur, num) => cur *= num, 1);
}

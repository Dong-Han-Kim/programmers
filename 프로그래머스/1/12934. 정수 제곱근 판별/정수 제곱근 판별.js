function solution(n) {
    let num = Math.sqrt(n);
    if (Number.isInteger(num)) {
        return (num + 1) ** 2
    }
    return -1;
}
function solution(a, b) {
    var answer = 0;
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    answer = sum;
    return answer;
}
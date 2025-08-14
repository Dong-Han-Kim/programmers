function solution(n) {
    var answer = [];
    let str = String(n);
    answer  = Array.from(str).map((a) => Number(a)).reverse();
    return answer;
}
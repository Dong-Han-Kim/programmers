function solution(arr, divisor) {
    var answer = [];
    const result = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
    answer = result.length ? result : [-1];
    return answer;
}
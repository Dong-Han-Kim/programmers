function solution(arr) {
    var answer = 0;
    const sum = arr.reduce((curr, a) => curr + a, 0);
    return sum / arr.length;
}
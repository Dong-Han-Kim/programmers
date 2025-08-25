function solution(x) {
    var answer = true;
    let num = x.toString().split('').reduce((curr, num) => curr + Number(num), 0);
    return answer = x % num === 0 ? true : false;
}
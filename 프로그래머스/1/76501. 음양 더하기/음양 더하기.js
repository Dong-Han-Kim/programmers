function solution(absolutes, signs) {
    var answer = 123456789;
    
    return answer = absolutes.reduce((sum, num, i) => sum + (signs[i] ? num : -num), 0);
}
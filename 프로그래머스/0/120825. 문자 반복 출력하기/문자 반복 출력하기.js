function solution(my_string, n) {
    return [...my_string].reduce((sum, str) => sum + str.repeat(n), '');
}
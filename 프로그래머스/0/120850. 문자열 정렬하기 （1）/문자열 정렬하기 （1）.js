function solution(my_string) {
    return Array.from(my_string).filter((str) => !isNaN(str)).map(item => Number(item)).sort((a, b) => a - b);
}
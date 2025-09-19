function solution(my_string) {
    return [...my_string].filter((a) => !isNaN(a)).reduce((sum, num) => sum + Number(num), 0);;
}
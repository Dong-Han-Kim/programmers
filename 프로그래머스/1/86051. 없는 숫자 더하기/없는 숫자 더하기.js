function solution(numbers) {
    let total = 45;
    let sum = numbers.reduce((a, b) => a + b, 0);
    
    return total - sum;
}
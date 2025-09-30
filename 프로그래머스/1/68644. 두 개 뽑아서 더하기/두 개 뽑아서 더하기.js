function solution(numbers) {
    const arr = new Set();
    
    let result;
    for (let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            arr.add(numbers[i] + numbers[j]);
        }
    }
    return [...arr].sort((a, b) => a - b);
}
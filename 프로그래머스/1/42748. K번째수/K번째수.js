function solution(array, commands) {
    let result = [];
    
    for (let [i, j, k] of commands) {
        let arr = array.slice(i - 1, j);
        
        arr.sort((a, b) => a - b);
        result.push(arr[k - 1]);
    }
    return result;
}
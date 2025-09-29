function solution(n) {
    const ternary = n.toString(3);
    const rev = [...ternary].reverse().join("");
    
    return parseInt(rev, 3);
}
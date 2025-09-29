function solution(d, budget) {
    d.sort((a, b) => a -b);
    let count = 0;
    for (let money of d) {
        if(budget >= money) {
            budget -= money;
            count++
        } else break;
    }
    return count;
}
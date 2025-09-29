function solution(t, p) {
    const len = p.length;
    let count = 0;
    
    for (let i = 0; i <= t.length - len; i++) {
        const sub = t.slice(i, i + len);
        if (sub <= p) count++;
    }
    return count;
}
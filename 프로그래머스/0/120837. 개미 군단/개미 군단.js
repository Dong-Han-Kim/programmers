function solution(hp) {
    var answer = 0;
    const g = Math.floor(hp / 5);
    const s = Math.floor((hp - g * 5) / 3);
    const w = Math.floor(hp - (g * 5 + s * 3));
    
    
    return g + s + w;
}
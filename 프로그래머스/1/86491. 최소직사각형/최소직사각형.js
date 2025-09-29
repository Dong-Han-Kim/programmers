function solution(sizes) {
    let width = 0;
    let height = 0;
    
    for (let [w, h] of sizes) {
        let big = Math.max(w, h);
        let small = Math.min(w, h);
        
        width = Math.max(width, big);
        height = Math.max(height, small);
    }
    
    return width * height;
}
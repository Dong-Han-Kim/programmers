function solution(s) {
    let minLength = s.length;
    
    for(let size = 1; size <= Math.floor(s.length / 2); size++) {
        let compressed = "";
        let prev = s.slice(0, size);
        let count = 1;
        
        for (let j = size; j < s.length; j += size) {
            let current = s.slice(j, j + size);
            if (prev === current) {
                count++;
            } else {
                compressed += (count > 1 ? count : "") + prev;
                prev = current;
                count = 1;
            }
        }
        
        compressed += (count > 1 ? count : "") + prev;
        
        minLength = Math.min(minLength, compressed.length);
    }
    return minLength;
}
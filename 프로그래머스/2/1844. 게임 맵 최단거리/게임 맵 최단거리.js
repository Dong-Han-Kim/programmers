function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const queue = [[0, 0, 1]]; // (x, y, distance)
    
    while (queue.length) {
        const [x, y, dist] = queue.shift();
        
        if (x === n - 1 && y === m - 1) return dist; // 도착!
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0; // 방문 처리
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1; // 도착 못함
}
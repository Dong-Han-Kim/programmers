function solution(k, dungeons) {
    let maxCount = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(currentFatigue, count) {
        if (count > maxCount) maxCount = count;
        
        for (let i = 0; i < dungeons.length; i++) {
            const [minRequired, consume] = dungeons[i];
            if (!visited[i] && currentFatigue >= minRequired) {
                visited[i] = true;
                dfs(currentFatigue - consume, count + 1);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0);
    return maxCount;
}
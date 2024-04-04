let longs = function(matrix){
    let n = matrix.length;
    let m = matrix[0].length;
    let f = new Array(n).fill(0).map(()=> new Array(m).fill(-1));
    let dx = [0, 1, 0, -1];
    let dy = [-1, 0, 1, 0];
    let max = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            max = Math.max(max, dfs(i, j));
        }
    }

    function dfs(x, y){
        if (f[x][y] !== -1)return f[x][y];
        f[x][y] = 1;
        for(let i = 0; i < 4; i++){
            let a = x + dx[i];
            let b = y + dy[i];
            if(a >= 0 && b >= 0 && a < n && b < m && matrix[x][y] > matrix[a][b]){
                f[x][y] = Math.max(f[x][y], dfs(a, b) + 1);
            }
        }
        return f[x][y];
    }
    return max;
}

console.log(longs([[9, 9, 4],[6, 6, 8],[2, 1, 1]]))
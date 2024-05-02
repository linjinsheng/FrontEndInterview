var findJudge = function(n, trust){
  let inDegrees = new Array(n+1).fill(0);
  let outDegrees = new Array(n+1).fill(0);
  for(const edge of trust){
    const [a, b] = edge;
    outDegrees[a]++;
    inDegrees[b]++;
  }
  for(let i = 1; i <= n; i++){
    if(inDegrees[i] == n-1 && outDegrees[i] == 0)return i;
  }
  return -1;
}

let n = 3, trust = [[1,3],[2,3],[3,1]];
console.log(findJudge(n, trust));
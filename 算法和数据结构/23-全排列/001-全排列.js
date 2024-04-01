const premute = function(nums){
  const res = [];
  const used = new Array(nums.length).fill(false);
  //  重复的排列一定要进行排序
  nums.sort((a, b) => a - b);

  const dfs = (path) => {
    //  当数字选购了
    if(path.length == nums.length){
      res.push(path.slice());
      return;
    }

    //  枚举所有的选择
    for(let i = 0; i < nums.length; i++){
      if(used[i])continue;
      if(i > 0 && nums[i-1] == nums[i] && !used[i-1])continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(path);
      //  撤销选择回溯,当前的数字设置为false
      path.pop();
      used[i] = false;
    }
  }
  dfs([]);
  return res;
}

let nums = [2, 2, 3];
console.log(premute(nums));
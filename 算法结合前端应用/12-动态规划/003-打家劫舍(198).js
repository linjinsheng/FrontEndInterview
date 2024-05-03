var  rob = function(nums) {
    if(nums.length === 0)return 0;
    const dp = [0, nums[0]];
    for(let i = 2; i <= nums.length; i++){
        dp[i] = Math.max(dp[i-2]+nums[i-1], dp[i-1]);
    }
    return dp[nums.length];
};
let nums = [1,2,3,1]
let res = rob(nums);
console.log('res--', res);
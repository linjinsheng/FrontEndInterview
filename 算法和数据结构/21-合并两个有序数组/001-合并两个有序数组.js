let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
function merge(nums1, m, nums2, n){
  let i = m - 1;
  let j = n - 1;
  let cur = m + n - 1;
  while(j >= 0){
    if(i >= 0 && nums1[i] >= nums2[j]){
      nums1[cur--] = nums1[i--];
    }else{
      nums1[cur--] = nums2[j--];
    }
  }
  return nums1;
}

let res = merge(nums1, m, nums2, n)
console.log(res);
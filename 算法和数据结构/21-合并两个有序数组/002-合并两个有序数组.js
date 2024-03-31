let nums1 = [1, 3, 5, 6, 7, 13, 14, 15, 16, 20, 33];
let nums2 =  [3, 4, 6, 8, 9, 13, 17, 18, 19];
// 合并后的数组(有序)
let between = [];
const transForNew = (nums1, nums2)=>{
  while(nums1.length + nums2.length){
    if(nums1.length < 1 || nums2.length < 1){
      between = between.concat(nums1.length < 1 ? nums2: nums1);
      break;
    }
    between.push(nums1[0] >= nums2[0] ? nums2.shift() : nums1.shift());
  }
  return between;
}

console.log(transForNew(nums1, nums2));
// 统计一个数字在排序数组中出现的次数。
// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0
//  
// 限制：
// 0 <= 数组长度 <= 50000
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //排除限制条件
    var len = nums.length;
    if(len<0 || len>50000){
        return -1;
    }
    let low = 0;
    let high = len-1;
    let mid = Math.floor((low+high)/2);
    while(low < high && nums[mid]!= target){
        if(nums[mid]>target){
            high = mid-1;
            mid = Math.floor((low+high)/2);
        }
        else{
            //nums[mid]<target;
            low = mid+1;
            mid = Math.floor((low+high)/2);
        }
    }
    if(nums[mid]!= target){
        return 0
    }
    let prev = mid-1;
    let next = mid+1;
    while(nums[prev]==nums[mid]){
        prev--;
    }
    while(nums[next]==nums[mid]){
        next++;
    }
    let rst = next-prev-1;
    return rst;
};
var a = search([5,7,7,8,8,10],6);
console.log(a);
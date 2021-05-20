//26. 删除有序数组中的重复项
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var cur = 0;
    var temp = null;
    while (cur < nums.length){
        temp = nums.splice(cur,1)[0];
        if (temp == nums[cur]){
            temp = null;
            continue;
        }
        else{
            nums.splice(cur,0,temp);
            cur++;
        }
    }
    return nums
};
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
//双指针
var removeDuplicates2 = function(nums) {
   var p = 0; //slow pointer
   var q = p+1; //fast pointer
   while(q < nums.length){
       if (nums[p]==nums[q]){
           q++;
       }
       else{
           nums[p+1]=nums[q];
           q++;
           p++;
       }
   }
   return nums.slice(0,p+1);
};
console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));

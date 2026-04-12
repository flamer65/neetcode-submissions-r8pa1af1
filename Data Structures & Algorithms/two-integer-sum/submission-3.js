class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const previous = {};
        for(let index = 0; index < nums.length; index++){
           let diff = target - nums[index];
            if(previous[diff] !== undefined && previous[diff] !== index){
                return [previous[diff],index]
            }else{
                previous[nums[index]] = index;
            }
        }
        return [];
    }
}

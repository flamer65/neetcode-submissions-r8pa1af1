class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        for(let right = 0, left = 0; right < nums.length; right++){
            if(nums[right] !== 0){
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left++
            }
        }
    }
}

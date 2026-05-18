class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let l = 0;
            for(let j = 0; j < nums.length; j++){
                if(nums[j] !== 0){
                    nums[l++] = nums[j]
                }
            }

            while(l < nums.length){
                nums[l++] = 0
            }
        }
    
}

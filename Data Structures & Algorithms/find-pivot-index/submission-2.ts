class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const totalSum = nums.reduce((a, b)=> a + b) 
        let leftSum = 0;
        let rightSum = totalSum;
        for(let i = 0; i < nums.length; i++){
            rightSum = rightSum - nums[i]
            if(rightSum === leftSum){
                return i
            }
             leftSum += nums[i];
        }
       return -1
    }
}

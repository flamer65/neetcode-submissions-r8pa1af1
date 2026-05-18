class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let leftSum = 0;
        let sum = 0
        nums.forEach((n) => sum += n)
        let rightSum = sum
        for(let i = 0; i < nums.length; i++){
            rightSum = rightSum - nums[i];
            if(rightSum === leftSum){
                return i
            }
            leftSum += nums[i]
        }
        return -1
    }
}

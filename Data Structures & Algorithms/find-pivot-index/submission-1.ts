class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const n = nums.length;
        const prefix = new Array(n + 1).fill(0)
        for(let i = 0; i < nums.length; i++){
            prefix[i + 1] = prefix[i] + nums[i]
        }
        for(let i = 0; i < nums.length; i++){
            const leftSum = prefix[i];
            const rightSum = prefix[n] - prefix[i + 1]
            if(leftSum === rightSum){
              return i
            }
        }
        return -1
    }
}

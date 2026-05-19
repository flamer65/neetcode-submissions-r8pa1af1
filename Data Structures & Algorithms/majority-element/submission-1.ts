class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
      const max = Math.floor(nums.length/2)
      for(let num of nums){
        let count = nums.reduce((acc, val) => acc + (val === num ? 1 : 0), 0)
        if(count > max){
          return num
        }
      }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
      let res = 0;
      let count = 0;
      for(let num of nums){
        if(count === 0){
           res = num;
        }
        count += num === res ? 1 : -1
      }
      return res
    }
}

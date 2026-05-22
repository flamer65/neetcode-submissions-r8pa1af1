class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
      let res = 0;
      let maxCount = 0;
      const map = new Map();
      for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
        if(map.get(num) > maxCount){
          res = num;
          maxCount = map.get(num)
        }
      }
      return res
    }
}

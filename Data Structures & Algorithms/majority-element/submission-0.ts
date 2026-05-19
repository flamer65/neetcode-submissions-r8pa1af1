class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let res = 0;
        const n = nums.length;
        const map = {};
        const maxLen = Math.floor(n / 2);
        for (let num of nums) {
            map[num] = (map[num] || 0) + 1;
            if (map[num] > maxLen) {
                res = num;
            }
        }
        return res;
    }
}

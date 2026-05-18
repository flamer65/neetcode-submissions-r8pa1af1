class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        const set = new Set(nums)
        let r = 0
        set.forEach((n) => {nums[r] = n; r++})
        return set.size
    }
}

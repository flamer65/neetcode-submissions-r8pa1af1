class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = []
        for(let i = 0; i < 2; i++){
            for(let value of nums){
                ans.push(value)
            }
        }
        return ans
    }
}

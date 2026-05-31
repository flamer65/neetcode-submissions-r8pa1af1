class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let fq = new Set();
        for(let num of nums){
            if(!fq.has(num)){
                fq.add(num)
            }else{
                return true
            }
        }
        return false
    }
}

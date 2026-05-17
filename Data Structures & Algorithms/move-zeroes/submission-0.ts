class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let temp = [];
        for(let n of nums){
            if(n !== 0){
                temp.push(n)
            }
        }

        for(let i = 0; i < nums.length; i++){
            if(i < temp.length){
                nums[i] = temp[i]
            }else{
                nums[i] = 0
            }
        }
    }
}

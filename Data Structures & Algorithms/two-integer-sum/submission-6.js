class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const visited = new Map();
        for (let j = 0; j < nums.length; j++) {
            const jNum = nums[j];
            if(!visited.has(jNum)){
                visited.set(jNum, j);
            }

            const iNum = target - jNum;
            const i = visited.get(iNum);

            if(i != undefined && i != j) {
                return [i, j];
            }
        }

        return [];
    }
}

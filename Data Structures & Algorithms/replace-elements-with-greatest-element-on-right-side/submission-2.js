class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const n = arr.length;
        const ans = new Array(n);
        let rightMax = -1;
        for (let i = n - 1; i >= 0; i--) {
            ans[i] = rightMax;
            rightMax = Math.max(rightMax, arr[i]);
        }
        return ans;
    }
}

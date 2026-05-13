class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxlength = 0
        let map = new Map();
        for(let right = 0; right < s.length; right++){
           if(map.has(s[right])){
                left = Math.max(map.get(s[right]) + 1, left)
            }
             map.set(s[right], right)
             maxlength = Math.max(maxlength, right - left + 1);
        }
        return maxlength
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxlength = 0;
        function helper(index, current){

            maxlength = Math.max(maxlength, current.length)

            if(index >= s.length) return;

            if(current.includes(s[index])){
                return
            }

            helper(index + 1, current + s[index])
        }

        for(let r  = 0; r < s.length; r++){
            helper(r,"")
        }
        return maxlength
    }
}

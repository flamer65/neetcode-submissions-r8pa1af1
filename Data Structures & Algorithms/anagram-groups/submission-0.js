class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}
        for(let s of strs){
            let order = s.split("").sort().join()
            if(!hash[order]){
                hash[order] = []
            }
            hash[order].push(s)
        }
        return Object.values(hash);
    }
}

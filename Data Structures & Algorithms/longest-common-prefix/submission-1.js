class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true;
    }

}
class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
       if(strs.length <= 0) return strs[0] || "";
       const trie = new Trie();
       for(let word of strs){
        trie.insert(word)
       }
       let node = trie.root;
       let prefix = ""
       while(true){
         let keys = Object.keys(node.children);
         if(node.isEnd === true || keys.length !== 1) break;

        const nextChar = keys[0];
        prefix += nextChar;
        node = node.children[nextChar];
        
       }
       return prefix;
    }
}

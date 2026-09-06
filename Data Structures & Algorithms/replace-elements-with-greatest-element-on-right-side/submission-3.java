class Solution {
    public int[] replaceElements(int[] arr) {
        int n = arr.length;
        for(int i = 0; i < n; i++){
            int res = -1;
            for(int j = i + 1; j < n; j++){
                res = Math.max(res, arr[j]);
            }
            arr[i] = res;
        }
        return arr;
    }
}
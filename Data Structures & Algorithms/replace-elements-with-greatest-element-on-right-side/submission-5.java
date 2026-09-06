class Solution {
    public int[] replaceElements(int[] arr) {
        int n = arr.length;
        int rightMax = -1;
        for(int i = n -1; i >= 0; i--){
            int newMax = Math.max(rightMax, arr[i]);
            arr[i] = rightMax;
            rightMax = newMax;
        }
        return arr;
    }
}
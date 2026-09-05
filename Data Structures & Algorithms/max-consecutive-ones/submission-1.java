class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int n = nums.length, res = 0;
        int cnt = 0;
        for(int i = 0; i < n; i++){
            if(nums[i] == 0){
                res = Math.max(res, cnt);
                cnt = 0;            
            }else{
                cnt++;
            }
        }
        return Math.max(res, cnt);
    }
}
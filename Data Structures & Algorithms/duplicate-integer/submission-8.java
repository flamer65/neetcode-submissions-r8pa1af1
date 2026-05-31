class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashMap<Integer,Integer> fq = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            if(fq.containsKey(nums[i])==false){
                fq.put(nums[i],1);
            }
            else{
                return true;
            }
        }
        return false;
    }
}
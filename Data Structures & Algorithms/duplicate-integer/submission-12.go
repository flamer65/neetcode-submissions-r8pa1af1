func hasDuplicate(nums []int) bool {
    fq := make(map[int]bool)
    for _,n := range nums{
        if fq[n] == true{
            return true
        }
        fq[n] = true
    }
    return false
}

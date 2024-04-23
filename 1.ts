function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    let findCount = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) findCount = findCount + 1;
      if (nums[i] === nums[j] && findCount > 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(containsDuplicate([1, 2, 3, 1]));

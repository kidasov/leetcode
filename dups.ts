// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else {
      j++;
    }
  }

  return i + 1;
}

/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let num = BigInt(digits.join('')) + 1n
  return num.toString().split('')
};
// @lc code=end


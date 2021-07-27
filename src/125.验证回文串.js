/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const arr = s.toUpperCase().match(/[A-Z0-9]/g) || []
  let str = ''
  while (arr.length > 0) {
    str += arr.pop()
  }
  if (str === (s.toUpperCase().match(/[A-Z0-9]/g) || []).join('')) {
    return true
  }
  return false
};
// @lc code=end


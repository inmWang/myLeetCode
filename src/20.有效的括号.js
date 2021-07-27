/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const deMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])
  const stack = []
  s.split('').forEach(v => {
    if (stack.length !== 0 && stack[stack.length - 1] === deMap.get(v)) {
      // console.log(v, stack[stack.length - 1] === deMap.get(v))
      stack.pop()
    } else {
      stack.push(v)
    }
  })
  return !stack.length
};

// @lc code=end


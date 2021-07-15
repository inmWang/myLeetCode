/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let count = 0;
  while (students.length > 0 && !(count === students.length && students[0] !== sandwiches[0])) {
    if (students[0] === sandwiches[0]) {
      students.splice(0, 1)
      sandwiches.splice(0, 1)
      count = 0
    } else {
      const [i] = students.splice(0, 1)
      students.push(i)
      count++
    }
  }
  return count;
};
// @lc code=end


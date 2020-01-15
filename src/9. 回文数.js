// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// https://leetcode-cn.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString();
  let reverseStr = '';
  for(let i = str.length - 1; i >= 0; i --) {
    reverseStr = `${reverseStr}${str[i]}`;
  }
  if (str === reverseStr) {
    return true;
  }
  return false;
};

console.log(isPalindrome(10));
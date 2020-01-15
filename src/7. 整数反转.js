// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// https://leetcode-cn.com/problems/reverse-integer/

// 思路：将x转换为string,按位反转，最后单独判断溢出
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reverseStr = '';
  var str = x.toString();
  for (let i = str.length - 1;i >= 0; i--) {
    if (i === 0 && str[i] === '-') {
      reverseStr = `-${reverseStr}`;
    } else {
      reverseStr = `${reverseStr}${str[i]}`
    }
  }
  const num = Number(reverseStr);
  if (
    num < Math.pow(-2, 31) ||
    num > Math.pow(2, 31) - 1
  ) {
    return 0;
  }
  return num;
};

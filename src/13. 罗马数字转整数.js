// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
// https://leetcode-cn.com/problems/roman-to-integer/

// 思路：将每一个字符对应的数字组成一个map。遍历每一个字符，如果这个字符对应的数字比
// 下一位小，则减之；否则加之。
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);
  let convertNum = 0;
  for (let i = 0; i < s.length; i++) {
    const romanItem = romanMap.get(s[i]);
    if (i < s.length - 1 && romanItem < romanMap.get(s[i+1])) {
      convertNum -= romanItem;
    } else {
      convertNum += romanItem;
    }
  }
  return convertNum;
};

console.log(romanToInt('MCMXCIV'));
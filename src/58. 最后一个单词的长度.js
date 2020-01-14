// 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。
// 如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
// 如果不存在最后一个单词，请返回 0 。
// 说明：一个单词是指仅由字母组成、不包含任何空格的 最大子字符串。

// 思路：首先trim去除前后空格，然后找到最后一个空格的位置，将str从空格后截取即可获取最后一个单词
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var str = s.trim();
  if(str.length == 0){
    return 0;
  }
  return str.slice(str.lastIndexOf(' ')+1).length;
};
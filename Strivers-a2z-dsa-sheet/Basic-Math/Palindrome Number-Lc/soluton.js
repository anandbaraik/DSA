/**
 * @param {number} x
 * @return {boolean}
 */

const reverseNumber = function (num) {
    let reverseNum = 0;
    while(num > 0) {
      let reminder = num % 10;
      reverseNum = (reverseNum * 10) + reminder;
      num = Math.trunc(num/10);
    }
    return reverseNum;
  }

  var isPalindrome = function(x) {
      if(x < 0) return false;
      let reversedNum = reverseNumber(x);
      return reversedNum === x;
  };
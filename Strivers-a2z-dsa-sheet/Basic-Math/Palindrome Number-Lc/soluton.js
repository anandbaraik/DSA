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
    const MIN_VALUE = Math.pow(-2,31);
    const MAX_VALUE = Math.pow(2,31)-1;
    if(x >= MIN_VALUE && x <= MAX_VALUE ) {
        let reversedNum = reverseNumber(x);
        return reversedNum === x;
    }
    return false;
};
const reverseNumber = function (num) {
    let reverseNum = 0;
    while(num > 0) {
      let reminder = num % 10;
      reverseNum = (reverseNum * 10) + reminder;
      num = Math.trunc(num/10);
    }
    return reverseNum;
  }

  const isPalindromeNumber = function(num) {
    if(!num) return;
    let reversedNum = reverseNumber(num);
    return reversedNum === num;
  }

  console.log(isPalindromeNumber(2442));
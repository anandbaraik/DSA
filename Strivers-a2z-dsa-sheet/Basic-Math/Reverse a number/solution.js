function reverseTheNumber(num) {
    if(!num) return;
    let reverseNum = 0;
    while(num > 0) {
      let reminder = num%10;
      reverseNum = (reverseNum*10) + reminder;
      num = Math.trunc(num/10);
    }
    return reverseNum;
}
console.log(reverseTheNumber(12223));
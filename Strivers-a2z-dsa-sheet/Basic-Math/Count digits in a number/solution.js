function countTheNumber(num) {

    if(!num) return 0;

    let count = 0;
    while(num > 0) {
      num = Math.trunc(num/10);
      count++;
    }
    return count;
}
console.log(countTheNumber(123));
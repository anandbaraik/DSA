
/**
 * @param {number} n
 * @returns {string}
*/

class Solution{
  armstrongNumber(n){
      if((n <= 100) || (n > 1000)) {
          return "No";
      }
      let temp = n;
      let sum = 0;
      while(temp > 0) {
          let reminder = temp%10;
          sum += (reminder * reminder * reminder);
          temp = Math.trunc(temp/10);
      }
      return (sum === n) ? "Yes" : "No";
  }
}
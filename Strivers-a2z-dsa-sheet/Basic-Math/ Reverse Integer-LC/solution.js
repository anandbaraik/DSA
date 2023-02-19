 /**
 * @param {number} x
 * @return {number}
 */
const reverse = function(number) {
    const MIN_VALUE = Math.pow(-2,31); // -2147483648
    const MAX_VALUE = Math.pow(2,31)-1; // 2147483647

    let reversedNumber = 0;

    while(number!=0){
        let reminder = number % 10;
        number = Math.trunc(number/10);
        // 9 digits 214783648
        if(
            reversedNumber > (MAX_VALUE/10) ||
            (
                reversedNumber===(MAX_VALUE/10) &&
                reminder > (MAX_VALUE%10)
            )
        ){
            return 0;
        }

        if(
            reversedNumber < (MIN_VALUE/10) ||
            (
                reversedNumber===(MIN_VALUE/10) &&
                reminder < (MIN_VALUE%10)
            )
        ){
            return 0;
        }

        reversedNumber = reversedNumber*10 + reminder;
    }

    return reversedNumber;
 };
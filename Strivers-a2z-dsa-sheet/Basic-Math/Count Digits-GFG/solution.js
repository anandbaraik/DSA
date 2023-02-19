function evenlyDivides(num){
    let count = 0;
    let temp = num;
    while(temp !=0){
        let digit = temp % 10;
        if(digit!==0 ){
            if(num % digit===0){
                count++;
            }
        }
        temp = Math.trunc(temp/10);
    }
    return count;
}
console.log(evenlyDivides(2446))
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let xor1 = 0;
    let xor2 = 0;
    let tempLength = nums.length - 1;
    for(let i=0;i<=tempLength;i++){
        xor1 = xor1 ^ nums[i];
        xor2 = xor2 ^ [i+1];
    }
    return xor1 ^ xor2;
};

console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
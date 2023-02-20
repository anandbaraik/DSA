Problem Statement: Given a number check if it is a palindrome.

An integer is considered a palindrome when it reads the same backward as forward.

## Examples:

```
Example 1:
Input: N = 123
Output: Not Palindrome Number
Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.

Example 2:
Input: N =  121
Output: Palindrome Number
Explanation: 121 read backwards as 121.Since these are two same numbers 121 is a palindrome.
```

**Approach:** We can reverse the original number and compare the original with the reversed number. If both are the same, the number qualifies as a palindrome number.

Say the input number is X. Declare a variable Y to store the reverse and initialize it to 0. Make a copy of X, say dummy that will be used later for comparison.

Let’s understand the procedure to reverse a number.

- At every step extract the last digit using % operator. Suppose X%10 = d.
- We will append this last digit , d to Y using a formula 10\*Y+d.
- The last digit of X has been used.Discard it using X/10.

Repeat these steps for the remaining digits. After every iteration, the size of X will shrink by one digit. Terminate the iteration when X = 0 meaning no new digits are left to be reversed.

The reversed number Y is compared with the dummy variable since X was destroyed while iteration. If Y equals dummy print “Palindrome Number” otherwise “Not Palindrome Number”.

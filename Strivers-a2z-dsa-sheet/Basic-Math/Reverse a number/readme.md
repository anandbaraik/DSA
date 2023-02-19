Problem Statement: Given a number N reverse the number and print it.

```
Example 1:
Input: N = 123
Output: 321
Explanation: The reverse of 123 is 321

Example 2:
Input: N = 234
Output: 432
Explanation: The reverse of 234 is 432
```

The idea is to extract digits from end of the given number and create a new number in reverse order.

**How to extract digits from end of a number?**

To extract the last digit, if you divide a number by 10, then the remainder will be the last digit. We can simply use the modulo(%) operator to do this, example: last digit of 123 will be (123 % 10), which is 3.

To reduce number by one digit from end, simply divide the number by 10. example: to reduce 123 to 12, simply do (123/10) which is equals to 12.

To create a number from digits: The idea is to start with 0, and for every digit, multiply the number generated so far by 10, and add the digit to it.

For example, to create a number from digits: [1,2,3]:

Consider the number, num = 0.

Then,

```
For first digit: 1
num = num*10 + 1 = 0*10 + 1 = 1;

For second digit: 2
num = num*10 + 2 = 1*10 + 2 = 12;

For third digit: 3
num = num*10 + 2 = 12*10 + 3 = 123;
```

## Approach:

- Run a while loop until the given number N is equal to zero while(N!=0)
- Initialize a variable reverse = 0;
- now in each step take remainder of the given number N store it a variable digit, digit = N % 10
- Also Divide the number by 10. N= N / 10
- in each step the variable reverse get updated as reverse = reverse\*10+digit.

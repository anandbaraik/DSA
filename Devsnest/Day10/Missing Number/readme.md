> Given an array `arr` containing n distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

# Input Format

First parameter - number `n`

Second Parameter - array of integers arr of size n

# Output Format

Return the number

## Example 1

```
Input:
   3
   3 0 1
Output:
   2
Explanation:
    n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in arr.
```

## Example 2

```
Input:
   2
   0 1
Output:
   2
Explanation:
   n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in arr.
```

## Constraints

- 1 <= n <= 104
- 0 <= arr[i] <= n
- All the numbers of arr are unique.
- Expected Time complexity: O(n)
- Expected Space Complexity: O(1)

> Given an array `arr` containing n distinct numbers in the range `[0, n+1]`, return the only two numbers in the range that is missing from the array in non-decreasing order.

# Input Format

First parameter - number `n`

Second Parameter - array of integers arr of size `n`

# Output Format

Return the array

## Example 1

```
Input:
    5
    4 0 3 1 2
Output:
    5 6
Explanation:
    n = 5, so all numbers are in the range [0, 6]. 5 and 6 are the missing numbers in the range since they don't appear in the arr.
```

## Example 2

```
Input:
    8
    7 2 0 5 4 6 3 8
Output:
    1 9
Explanation:
    n = 8, so all numbers are in the range. 1 and 9 are the missing numbers in the range since they don't appear in the arr.
```

### Constraints

- 1 <= n <= 104
- 0 <= arr[i] <= (n+1)
- All the numbers of arr are unique.
- Expected Time complexity: O(n)
- Expected Space Complexity: O(1)

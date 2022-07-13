> Given a sorted array of integers `nums` of size `n` and a target value `k`, find the frequency of the target element `k` in `nums`.

# Input Format

First Parameter - number `n`

Second Parameter - array of integers `nums` of size `n`

Third Parameter - number `k`

# Output Format

Return the number.

## Example 1

```
Input:
    8
    1 1 4 4 4 7 9 11
    4
Output:
    3
Explanation:
    number of occurrences of target element 4 is 3.
```

## Example 2

```
Input:
    4
    1 1 3 4
    2
Output:
    number of occurrences of target element 2 is 0
```

### Constraints

- 0 <= n <= 105
- 0 < nums[i] < 100
- 0 < k < 100
- Expected Time Complexity: O(log n)
- Expected Space Complexity: O(1)

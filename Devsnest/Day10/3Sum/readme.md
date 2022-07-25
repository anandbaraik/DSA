> Given an integer array `nums` of size `n`, return all the triplets [nums[i], nums[j], nums[k]] such that `i != j`,`i != k`, and `j != k`, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

The result must be in non-decreasing order.

# Input Format

First Parameter - number `n`

Second Parameter - array `nums`

# Output Format

Return the array of array.

## Example 1:

```
Input:
    6
    -1 -2 -4 2 2 3
Output:
    -4 2 2
    -2 -1 3
Explanation:
    The sum of (-4 + 2 + 2) = 0 and the indices of each element are not equal to each other, i.e. 2 != 3, 3 != 4, 4 != 2.
```

## Example 2:

```
Input
    0
Output:
    [] - Empty array
Explanation:
    There is no 3 elements that sum upto zero.
```

### Constraints

- 0 <= n <= 3000
- -105 <= nums[i] <= 105
- Expected Time Complexity: O(n2)
- Expected Space Complexity: O(n)

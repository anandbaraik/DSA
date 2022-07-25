> Given an integer array `arr`, return an array `res` such that `res[i]` is equal to the product of all the elements of `arr` except `arr[i]`.

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

**You must write an algorithm that runs in O(n) and without using the division operation.**

# Input Format

First Parameter - int `n`

Second Parameter - array `arr`

# Output Format

Return the array.

## Example 1:

```
Input:
    4
    1 2 3 4
Output:
   24 12 8 6
Explanation:
    The output contains the product of each element except itself. For res[0], product of all nums except self is 2 * 3 * 4 = 24 and so on...
```

## Example 2:

```
Input:
    6
    4 -1 5 10 2 1
Output:
    -100 400 -80 -40 -200 -400
Explanation:
    The output contains the product of each element except itself.
```

### Constraints

- 2 <= n <= 105
- -30 <= arr[i] <= 30
- Expected Time Complexity: O(n)
- Expected Space Complexity: O(n)

> Given an array `arr` of size `n` sorted in `non-decreasing order`, remove the duplicates in-place such that each unique element appears only once keeping the relative order of the element same.

# Input Format

First Parameter - number `n`

Second Parameter - array `arr` of size `n`

# Output Format

Return the array.

## Example 1:

```
Input:
    6
    1 1 4 4 4 7
Output:
    1 4 7
Explanation:
    1 and 4 are repeated in the original array. When you remove them, We are left with 1, 4 and 7.
```

## Example 2:

```
Input:
    5
    3 3 4 5 6
Output:
    3 4 5 6
Explanation:
    The repeating element that must be removed is 3.
```

### Constraints

- 1 <= n <= 3 \* 104
- -100 <= arr[i], key <= 100
- arr is sorted in non-decreasing order.
- Expected Time Complexity: O(n)
- Expected Space Complexity: O(n)

> Given an array `arr` of size `n`, and two intervals `x` and `y`. Find the average of elements which lies between the given intervals inclusively.

# Input Format

First Parameter - number n

Second Parameter - array arr of size n

Third Parameter - number x

Fourth Parameter - number y

# Output Format

Return the decimal value

## Example 1:

```Input:
    6
    6 2 5 4 3 1
    2
    5
Output:
    3.25
Explanation:
    The elements between indices 2 and 5 are 5, 4, 3 and 1. The Average is:
         (5 + 4 + 3 + 1) / 4 = 3.25
```

## Example 2:

```Input:
    2
    7 2
    0
    1
Output:
    4.5
Explanation:
    The elements between indices 0 and 1 are 7 and 2. The average is:
        (7 + 2) / 2 = 4.5
```

### Constraints

- 0 <= n <= 104
- -104 <= arr[i] <= 104
- 0 <= x <= y < n
- Expected Time Complexity: O(n)
- Expected Space Complexity: O(1)

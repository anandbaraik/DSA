> You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to modify the input 2D matrix directly.

**You are not allowed to allocate another 2D matrix and do the rotation.**

# Input Format

First Parameter - vector<vector<int>>`mat` of dimension `n x n`

# Output Format

Return the matrix.

## Example 1:

```
Input:
    3 3
    1 2 3
    4 5 6
    7 8 9
Output:
    7 4 1
    8 5 2
    9 6 3
```

![RotateImage1](https://user-images.githubusercontent.com/31516195/180829445-af296b0e-f430-4358-b83d-a199d61f0244.jpg)

## Example 2:

```
Input:
    4 4
    5 1 9 11
    2 4 8 10
    13 3 6 7
    15 14 12 16
Output:
    15 13 2 5
    14 3 4 1
    12 6 8 9
    16 7 10 11
```

![RotateImage2](https://user-images.githubusercontent.com/31516195/180829569-d7859dbb-2e44-44d8-8a8b-a816e2dc2b63.jpg)

### Constraints

- 3 <= n <= 20
- Expected Time Complexity: O(n2)
- Expected Space Complexity: O(1)

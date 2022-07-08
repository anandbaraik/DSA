> Return the pattern of size `M x N` with specifications:

- The pattern should have `‘DEVSNEST!’` written in the center.
- The pattern should only use `|`, `.` and `-` characters
  Note: `M` is an odd natural number, and `N` is 3 times `M`

# Input Format

First Parameter - Integer M

Second Parameter - Integer N

# Output Format

Return the array of string

## Example 1

```
    Input:
        9
        27
    Output:
        ------------.|.------------
        ---------.|..|..|.---------
        ------.|..|..|..|..|.------
        ---.|..|..|..|..|..|..|.---
        ---------DEVSNEST!---------
        ---.|..|..|..|..|..|..|.---
        ------.|..|..|..|..|.------
        ---------.|..|..|.---------
        ------------.|.------------
```

### Constraints

- 5 < M < 101
- 15 < N < 303
- M is an odd natural number, and N is 3 times M.

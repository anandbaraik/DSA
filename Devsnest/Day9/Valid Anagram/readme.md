> Given two strings `s1` and `s2`, return true if `s2` is an anagram of `s1`, and false otherwise.

An `Anagram` is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

return `1` if true or `0` if false.

# Input Format

First Parameter - string `s1`

Second Parameter - string `s2`

# Output Format

Return the boolean.

## Example 1:

```
Input:
    dusty
    study
Output:
    1
Explanation:
    s2 is anagram of s1. return 1 specifying true.
```

## Example 2:

```
Input:
    cat
    rat
Output:
    0
Explanation:
    s2 had letter 'r' which is not in s1. Hence, it is not an anagram.
```

### Constraints

- 1 <= s1.length, s2.length <= 5 \* 104
- s1 and s2 consists of lowercase English letters.
- Expected Time Complexity: O(n)
- Expected Space Complexity: O(n)

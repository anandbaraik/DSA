# 680. Valid Palindrome II

Given a string `s`, return `true` if the `s` can be palindrome after deleting `at most one` character from it.

# Example 1

```
Input: s = "aba"
Output: true
```

# Example 2

```
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
```

# Example 3

```
Input: s = "abc"
Output: false
```

# Constraints:

- `1 <= s.length <= 105`
- `s` consists of lowercase English letters.

# solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      let skipLeftChar = s.slice(left + 1, right + 1);
      let skipRightChar = s.slice(left, right);
      return isPalindrome(skipLeftChar) || isPalindrome(skipRightChar);
    }
    left++;
    right--;
  }
  return true;
};

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
```

# 125. Valid Palindrome

A phrase is a `palindrome` if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a `palindrome`, or `false` otherwise.

# Example 1

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

# Example 2

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

# Example 3

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

# Constraints:

- 1 <= s.length <= 2 \* 10^5
- `s` consists only of printable ASCII characters

# solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let isLeftCharIsAlphaNumeric = isAlphanumeric(s.charAt(left));
    if (!isLeftCharIsAlphaNumeric) {
      left++;
      continue;
    }

    let isRightCharIsAlphaNumeric = isAlphanumeric(s.charAt(right));
    if (!isRightCharIsAlphaNumeric) {
      right--;
      continue;
    }

    let endsEqual =
      s.charAt(left).toLowerCase() === s.charAt(right).toLowerCase();
    if (!endsEqual) {
      return false;
    }

    left += 1;
    right -= 1;
  }
  return true;
};

function isAlphanumeric(c) {
  return (
    (c.toLowerCase() >= "a" && c.toLowerCase() <= "z") || (c >= "0" && c <= "9")
  );
}
```

# solution 2
```js
const str = "A man, a plan, a canal: Panama";

const isAlphaNumeric = (char) => {
    return /^[a-z0-9]$/i.test(char);

/* 
^         start
[a-z0-9] one valid char
$         end
i         case insensitive
*/
}

const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        //skip spaces or commas from left
        while(left < right && !isAlphaNumeric(str[left])) {
            left++;
        }

        //skip spaces or commans from right
        while(left < right && !isAlphaNumeric(str[right])) {
            right--;
        }

        //check if char is same
        if(
            str[left].toLowerCase() !==
            str[right].toLowerCase()
        ) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome(str));
```
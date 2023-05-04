# 1704. Determine if String Halves Are Alike

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

## Example 1

```js
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
```

## Example 2

```js
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
```

##Constraints:

- 2 <= s.length <= 1000
- s.length is even.
- s consists of uppercase and lowercase letters.

# solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let rightSearch = 0;
  let leftSearch = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.has(s[i])) rightSearch = rightSearch + 1;
    if (vowels.has(s[s.length - i - 1])) leftSearch = leftSearch + 1;
  }
  return rightSearch === leftSearch;
};
```

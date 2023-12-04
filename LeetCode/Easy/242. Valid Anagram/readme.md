# 242. Valid Anagram

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Example 1:

```js
Input: (s = "anagram"), (t = "nagaram");
Output: true;
```

## Example 2:

```js
Input: (s = "rat"), (t = "car");
Output: false;
```

## Constraints:

- `1 <= s.length, t.length <= 5 * 104`
- `s` and `t` consist of lowercase English letters.

## Solution

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  addCharFrquency(s, map);
  subtractCharFrquency(t, map);
  return checkCharFrequency(map);
};

function addCharFrquency(s, map) {
  for (let char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
    }
  }
}

function subtractCharFrquency(t, map) {
  for (let char of t) {
    if (!map[char]) continue;

    if (map[char]) {
      map[char] = map[char] - 1;
    }
  }
}

function checkCharFrequency(map) {
  for (let char in map) {
    if (!(map[char] == 0)) return false;
  }
  return true;
}
```

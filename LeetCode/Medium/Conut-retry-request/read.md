# Count Retry Requests

You are given an integer `gap`, a string array `requestIds`, and an integer array `timestamps`.

A backend server processes a sequence of incoming API requests. Each request is identified by `requestIds[i]` and arrives at time `timestamps[i]`.

A request is considered a **retry request** if the same request ID has appeared before, and the time difference between the current request and its **most recent previous occurrence** is **less than or equal to `gap`**.

Return the total number of retry requests.


### Example 1

```

Input: gap = 5,
       requestIds = ["req1","req2","req1","req1","req2"],
       timestamps = [1,2,4,10,6]
Output: 2

```

**Explanation:**

* `"req1"` at time `1` → first occurrence, not a retry

* `"req2"` at time `2` → first occurrence, not a retry

* `"req1"` at time `4` → previous occurrence at `1`, difference = `3 <= 5`, retry

* `"req1"` at time `10` → previous occurrence at `4`, difference = `6 > 5`, not retry

* `"req2"` at time `6` → previous occurrence at `2`, difference = `4 <= 5`, retry

So the total retry count is `2`.

---

### Example 2

```
Input: gap = 3,
       requestIds = ["A","B","A","C","A"],
       timestamps = [1,2,7,8,9]
Output: 1

```

**Explanation:**

* `"A"` at time `1` → first occurrence

* `"B"` at time `2` → first occurrence

* `"A"` at time `7` → difference = `6 > 3`, not retry

* `"C"` at time `8` → first occurrence

* `"A"` at time `9` → previous occurrence at `7`, difference = `2 <= 3`, retry

Total retry count = `1`.

---

### Constraints

```
1 <= requestIds.length <= 10^5

requestIds.length == timestamps.length

1 <= gap <= 10^9

1 <= timestamps[i] <= 10^9

1 <= requestIds[i].length <= 20

requestIds[i] consists of English letters and digits

```
---


### Function Signature

```javascript 
/**

 * @param {number} gap

 * @param {string[]} requestIds

 * @param {number[]} timestamps

 * @return {number}

 */

var getRetryCount = function(gap, requestIds, timestamps) {



};

```
#solution

```
```

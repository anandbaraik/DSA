# LRU Cache

## Problem Statement

Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the `LRUCache` class:

- `LRUCache(int capacity)`  
  Initialize the LRU cache with positive size `capacity`.

- `int get(int key)`  
  Return the value of the key if the key exists, otherwise return `-1`.

- `void put(int key, int value)`  
  Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.  
  If the number of keys exceeds the capacity from this operation, **evict the least recently used key**.

### Constraint

Both operations must run in:

```text
get()  → O(1)
put()  → O(1)
```

Average time complexity.

---

# Example

## Input

```javascript
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]

[[2], [1,1], [2,2], [1], [3,3], [2], [4,4], [1], [3], [4]]
```

## Output

```javascript
[null, null, null, 1, null, -1, null, -1, 3, 4]
```

---

# Solution

```js
// Node class for Doubly Linked List
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;

        this.prev = null;
        this.next = null;
    }
}


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;

    // Map stores: key -> node reference
    this.cache = new Map();

    // Dummy head and tail nodes
    // head.next = least recently used
    // tail.prev = most recently used
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/*
  Helper Function 1
  Remove node from linked list

  Before:
  A <-> B <-> C

  remove(B)

  After:
  A <-> C
*/
LRUCache.prototype.removeNode = function (node) {
    let prevNode = node.prev;
    let nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
};

/*
  Helper Function 2
  Insert node before tail

  Before:
  HEAD <-> A <-> B <-> TAIL

  insert(C)

  After:
  HEAD <-> A <-> B <-> C <-> TAIL
*/
LRUCache.prototype.insertAtEnd = function (node) {
    let prevLastNode = this.tail.prev;

    prevLastNode.next = node;
    node.prev = prevLastNode;

    node.next = this.tail;
    this.tail.prev = node;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    // Key not found
    if (!this.cache.has(key)) {
        return -1;
    }

    // Get node from map
    let node = this.cache.get(key);

    // Move node to most recently used position
    this.removeNode(node);
    this.insertAtEnd(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // Case 1: key already exists
    if (this.cache.has(key)) {
        let existingNode = this.cache.get(key);

        // Remove old node from linked list
        this.removeNode(existingNode);
    }

    // Create new node
    let newNode = new Node(key, value);

    // Update map
    this.cache.set(key, newNode);

    // Insert as most recently used
    this.insertAtEnd(newNode);

    // Case 2: capacity exceeded
    if (this.cache.size > this.capacity) {
        // Least recently used = first real node after head
        let lruNode = this.head.next;

        // Remove from linked list
        this.removeNode(lruNode);

        // Remove from map
        this.cache.delete(lruNode.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

# Step by Step Execution

### Create Cache

```javascript
LRUCache lRUCache = new LRUCache(2);
```

Capacity = 2

```text
Cache = {}
```

---

### Operation 1

```javascript
lRUCache.put(1,1)
```

Insert key `1`

```text
Cache = {1=1}
```

---

### Operation 2

```javascript
lRUCache.put(2,2)
```

Insert key `2`

```text
Cache = {1=1, 2=2}
```

---

### Operation 3

```javascript
lRUCache.get(1)
```

Return value of key `1`

```text
Output = 1
```

Since key `1` is accessed, it becomes **Most Recently Used**

```text
Usage Order:

2 → Least Recently Used
1 → Most Recently Used
```

---

### Operation 4

```javascript
lRUCache.put(3,3)
```

Cache is full.

Need to insert key `3`

Current usage:

```text
2 → LRU
1 → MRU
```

Evict key `2`

```text
Cache = {1=1, 3=3}
```

---

### Operation 5

```javascript
lRUCache.get(2)
```

Key `2` was removed.

```text
Output = -1
```

---

### Operation 6

```javascript
lRUCache.put(4,4)
```

Cache full again.

Current usage:

```text
1 → LRU
3 → MRU
```

Evict key `1`

```text
Cache = {4=4, 3=3}
```

---

### Operation 7

```javascript
lRUCache.get(1)
```

Key `1` removed earlier.

```text
Output = -1
```

---

### Operation 8

```javascript
lRUCache.get(3)
```

Key exists.

```text
Output = 3
```

Now usage order:

```text
4 → LRU
3 → MRU
```

---

### Operation 9

```javascript
lRUCache.get(4)
```

Key exists.

```text
Output = 4
```

Final usage order:

```text
3 → LRU
4 → MRU
```

---

# Visual Representation

Capacity = 2

Initial:

```text
{}
```

After:

```javascript
put(1,1)
```

```text
HEAD ← 1 → TAIL
```

After:

```javascript
put(2,2)
```

```text
HEAD ← 2 ← 1 → TAIL
```

After:

```javascript
get(1)
```

Move `1` to front.

```text
HEAD ← 1 ← 2 → TAIL
```

After:

```javascript
put(3,3)
```

Remove `2`

```text
HEAD ← 3 ← 1 → TAIL
```

After:

```javascript
put(4,4)
```

Remove `1`

```text
HEAD ← 4 ← 3 → TAIL
```

---

# Constraints

```text
1 <= capacity <= 3000

0 <= key <= 10^4

0 <= value <= 10^5

At most 2 * 10^5 calls will be made to get and put
```

---

# Key Observation

To achieve:

```text
get() → O(1)
put() → O(1)
```

We need:

## 1. HashMap

For fast lookup

```text
key → node
```

Time complexity:

```text
O(1)
```

---

## 2. Doubly Linked List

To maintain usage order.

```text
Most Recently Used ←→ Least Recently Used
```

Allows:

- Insert → O(1)
- Delete → O(1)
- Move node → O(1)

---

# Why Not Array?

Suppose:

```text
[A, B, C]
```

Access A:

Need:

```javascript
indexOf(A) → O(n)
splice() → O(n)
push() → O(1)
```

Total:

```text
O(n)
```

Not acceptable.

---

# Optimal Approach

Use:

```text
HashMap + Doubly Linked List
```

Structure:

```text
Map:

{
  1 → NodeRef
  2 → NodeRef
  3 → NodeRef
}
```

Linked List:

```text
HEAD ← Most Recent ← ... ← Least Recent → TAIL
```

Eviction:

Remove node near tail.

```text
tail.prev
```

Time:

```text
O(1)
```

---

# Operations Needed

## get(key)

1. Check map  
2. If not found → return `-1`  
3. If found  
   - Move node to front  
   - Return value  

---

## put(key, value)

1. If key exists  
   - Update value  
   - Move to front  

2. If new key  
   - Insert at front  

3. If capacity exceeded  
   - Remove least recently used node  

---

# Final Complexity

| Operation | Time | Space |
|------------|------|------|
| get() | O(1) | O(n) |
| put() | O(1) | O(n) |

---

# Real World Uses

- Browser caching
- API response caching
- Database query caching
- Redis eviction policy
- CDN caching
- Image caching
- React/Vue memoization
- Operating system page replacement

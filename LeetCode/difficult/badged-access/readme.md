# badged-access

We are working on a security system for a badged-access room in our company's building.

Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:

1. All employees who didn't use their badge while exiting the room - they recorded an enter without a matching exit. (All employees are required to leave the room before the log ends.)

2. All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter. (The room is empty when the log begins.)

Each collection should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.

# Example 1

```js
records1 = [
["Paul", "enter"],
["Pauline", "exit"],
["Paul", "enter"],
["Paul", "exit"],
["Martha", "exit"],
["Joe", "enter"],
["Martha", "enter"],
["Steve", "enter"],
["Martha", "exit"],
["Jennifer", "enter"],
["Joe", "enter"],
["Curtis", "exit"],
["Curtis", "enter"],
["Joe", "exit"],
["Martha", "enter"],
["Martha", "exit"],
["Jennifer", "exit"],
["Joe", "enter"],
["Joe", "enter"],
["Martha", "exit"],
["Joe", "exit"],
["Joe", "exit"]
]

Expected output: ["Steve", "Curtis", "Paul", "Joe"], ["Martha", "Pauline", "Curtis", "Joe"]
```

# Example 2

```js
records2 = [
["Paul", "enter"],
["Paul", "exit"],
]

Expected output: [], []
```

# Example 3

```js
records3 = [
["Paul", "enter"],
["Paul", "enter"],
["Paul", "exit"],
["Paul", "exit"],
]

Expected output: ["Paul"], ["Paul"]
```

# Example 4

```js
records4 = [
["Raj", "enter"],
["Paul", "enter"],
["Paul", "exit"],
["Paul", "exit"],
["Paul", "enter"],
["Raj", "enter"],
]

Expected output: ["Raj", "Paul"], ["Paul"]
```

# Solution

```js

```

# Dice Roller

## Task

Build an app that:

- rolls a dice when a button is clicked
- generates a random number from 1 to 6
- displays the result

---

## Random Numbers In A Range

Math.random() generates:

```js
0 <= value < 1
```

To generate a number between 0 and 5:

```js
Math.floor(Math.random() * 6)
```

Possible values:

```text
0
1
2
3
4
5
```

---

## Shifting A Range

Add 1 to move the range.

Example:

```js
Math.floor(Math.random() * 6) + 1
```

Possible values:

```text
1
2
3
4
5
6
```

---

## General Formula

To generate a random number between:

```text
1 and N
```

use:

```js
Math.floor(Math.random() * N) + 1
```

Examples:

```js
Math.floor(Math.random() * 10) + 1
```

Result:

```text
1 to 10
```

---

## Concepts Introduced

- random numbers in a range
- shifting a range
- general random-number formula
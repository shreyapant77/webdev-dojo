# Array Playground

## Task

Build an app that:

- takes text input from the user
- adds the text into an array
- displays the entire array

Example:

```text
Input: Apple
```

Click Add

```js
["Apple"]
```

Input:

```text
Banana
```

Click Add

```js
["Apple", "Banana"]
```

---

## Adding To An Array

Use:

```js
arr.push(value);
```

Example:

```js
let fruits = [];

fruits.push("Apple");
fruits.push("Banana");
```

Result:

```js
["Apple", "Banana"]
```

---

## Empty Array

Create an empty array:

```js
let arr = [];
```

---

## Array Growth

Every time push() runs:

```js
arr.push(value);
```

the array becomes larger.

Example:

```js
[]
```

↓

```js
["Apple"]
```

↓

```js
["Apple", "Banana"]
```

↓

```js
["Apple", "Banana", "Mango"]
```

---

## Displaying An Array

A simple way:

```js
paraAccess.innerText = arr;
```

Output:

```text
Apple,Banana,Mango
```

---

## State

The array must be global.

Example:

```js
let arr = [];
```

outside the function.

Otherwise all stored data is lost after every click.

---

## Concepts Introduced

- empty arrays
- push()
- growing an array
- displaying array contents
- arrays as application state
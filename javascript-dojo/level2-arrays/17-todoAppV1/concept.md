# Todo App V1

## Task

Build an app that:

- accepts a task from the user
- stores the task in an array
- displays all tasks

Example:

Input:

```text
Learn JavaScript
```

Result:

```text
Learn JavaScript
```

Input:

```text
Practice Arrays
```

Result:

```text
Learn JavaScript,Practice Arrays
```

---

## Meaningful Variable Names

Instead of:

```js
let arr = [];
```

use:

```js
let tasks = [];
```

The variable name should describe the data being stored.

---

## Arrays As Application Data

The todo list is simply an array.

Example:

```js
let tasks = [
    "Learn JS",
    "Practice Arrays"
];
```

---

## Reusing Existing Logic

The same logic from Array Playground can be reused.

Example:

```js
tasks.push(inputValue);
```

Programming often means:

```text
same logic
different data
```

---

## Concepts Introduced

- meaningful variable names
- application data
- representing tasks using arrays
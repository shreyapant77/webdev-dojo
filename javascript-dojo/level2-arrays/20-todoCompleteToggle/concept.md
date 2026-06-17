# Todo Complete Toggle

## Task

Build an app that:

- adds tasks
- marks tasks as completed
- re-renders the updated list

---

## Why Strings Are Not Enough

This stores only task text:

```js
"Learn JS"
```

We cannot store whether the task is completed.

---

## Objects

An object stores multiple values.

Example:

```js
let task = {
    text: "Learn JS",
    completed: false
};
```

---

## Accessing Object Properties

Use dot notation.

Example:

```js
task.text
```

Result:

```text
Learn JS
```

Example:

```js
task.completed
```

Result:

```text
false
```

---

## Updating Properties

Example:

```js
task.completed = true;
```

Now:

```js
task.completed
```

becomes:

```text
true
```

---

## Arrays Of Objects

Example:

```js
let tasks = [
    {
        text: "Learn JS",
        completed: false
    },
    {
        text: "Practice Arrays",
        completed: true
    }
];
```

---

## Concepts Introduced

- objects
- key-value pairs
- dot notation
- updating object properties
- arrays of objects
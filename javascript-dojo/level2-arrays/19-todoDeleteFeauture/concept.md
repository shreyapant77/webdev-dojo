# Todo Delete Feature

## Task

Build an app that:

- adds tasks
- deletes a task by index
- re-renders the updated task list

---

## Removing From An Array

Use:

```js
arr.splice(index, count);
```

Example:

```js
let arr = ["A", "B", "C"];

arr.splice(1, 1);
```

Result:

```js
["A", "C"]
```

---

## Meaning Of Parameters

```js
splice(startIndex, numberOfItems)
```

Example:

```js
arr.splice(2, 1);
```

Meaning:

```text
Start at index 2
Remove 1 item
```

---

## User Input For Deletion

If user enters:

```text
1
```

then:

```js
tasks.splice(1, 1);
```

removes the second task.

Remember:

```text
Arrays use zero-based indexing.
```

---

## Re-render After Changes

Whenever the array changes:

```js
push()
splice()
```

the UI must be rebuilt.

---

## Concepts Introduced

- splice()
- deleting array elements
- index-based deletion
- re-rendering after updates
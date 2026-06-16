# Todo Render System

## Task

Build an app that:

- stores tasks in an array
- displays each task separately
- updates the display whenever a task is added

---

## Why Loops?

Arrays can contain many items.

Instead of writing:

```js
tasks[0]
tasks[1]
tasks[2]
```

use a loop.

---

## for Loop

Example:

```js
for(let i=0;i<tasks.length;i++){
    console.log(tasks[i]);
}
```

Meaning:

```text
Start at index 0
↓
Visit every element
↓
Stop at end of array
```

---

## Accessing Current Element

Inside the loop:

```js
tasks[i]
```

gives the current task.

---

## Building Output

Example:

```js
let output = "";
```

Inside loop:

```js
output += tasks[i];
```

After loop:

```js
para.innerText = output;
```

---

## Concepts Introduced

- for loops
- array traversal
- tasks[i]
- building output dynamically
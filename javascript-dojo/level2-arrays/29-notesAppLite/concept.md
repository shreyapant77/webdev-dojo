# Notes App Lite (Feature 1)

## Goal

Add notes and display all saved notes.

---

## Store Notes

```js
let notes = [];
```

Add a note:

```js
notes.push(noteInput.value);
```

---

## Render Notes

Use a loop:

```js
for(let i=0;i<notes.length;i++){
    ...
}
```

Display:

```text
Note 1: Learn JavaScript

Note 2: Practice DSA

Note 3: Build Projects
```

---

## Workflow

Enter Note
↓
Add Note
↓
Render Notes

---

## Suggested HTML

```html
<h1>Notes App Lite</h1>

<textarea class="noteInput"></textarea>

<button class="addBtn">
    Add Note
</button>

<p class="para"></p>
```

### 3. Delete Note

Remove a note using its index.

```js
notes.splice(index,1);
```

---

### 4. Edit Note

Replace an existing note.

```js
notes[index] = newText;
```

---

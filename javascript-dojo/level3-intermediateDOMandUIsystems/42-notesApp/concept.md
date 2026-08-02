# Concepts — Project 42: Sticky Notes

## 🎯 Goal

Learn how to create, display, and remove HTML elements dynamically using JavaScript.

---

## 🧠 New Concepts

### 1. `document.createElement()`

Creates a new HTML element.

```javascript
let note = document.createElement("p");
```

---

### 2. `appendChild()`

Adds an element to the webpage.

```javascript
container.appendChild(note);
```

---

### 3. `remove()`

Removes an element from the page.

```javascript
note.remove();
```

---

### 4. Dynamic Event Listeners

Elements created using JavaScript can also have event listeners.

```javascript
delBtn.addEventListener("click", function () {
    noteBox.remove();
});
```

---

## Suggested HTML

```html
<h1>Sticky Notes</h1>

<input
    type="text"
    class="notes"
    placeholder="Enter note..."
>

<button class="btn">Add Note</button>

<div class="container"></div>
```

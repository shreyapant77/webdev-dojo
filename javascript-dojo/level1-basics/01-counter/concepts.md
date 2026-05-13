# Counter App — Concepts Guide

Before building this project, understand the following JavaScript concepts.

---

# 🎯 Project Goal

The goal of this project is to learn how JavaScript can:
- respond to button clicks
- store changing values
- update content on the webpage dynamically

By the end of this project, you will understand the basics of interaction between JavaScript and HTML.

---

# 1. Variables

Variables are used to store data.

In this project, we need a variable to store the current counter value.

Example:

```js
let count = 0;
```

### Explanation
- `let` allows the value to change later.
- `count` stores the current number.
- `0` is the starting value.

---

# 2. DOM Selection

JavaScript can access HTML elements using selectors.

This allows JavaScript to:
- read content
- change content
- respond to user actions

Example:

```js
document.querySelector(".increment-btn");
```

### Explanation
- `document` represents the webpage.
- `querySelector()` selects an HTML element.
- `.increment-btn` selects an element having that class.

Another common selector:

```js
document.getElementById("counter-value");
```

This selects an element using its `id`.

---

# 3. Event Listeners

Event listeners detect user actions like:
- clicks
- typing
- mouse movement

In this project, buttons will respond to clicks.

Example:

```js
button.addEventListener("click", increaseCounter);
```

### Explanation
- `"click"` is the event.
- `increaseCounter` is the function that runs after clicking.

---

# 4. Functions

Functions group reusable logic together.

Example:

```js
function sayHello() {
    console.log("Hello");
}
```

Functions help:
- organize code
- avoid repetition
- improve readability

In this project, functions will:
- increase count
- decrease count
- reset count

---

# 5. Updating the DOM

JavaScript can dynamically change webpage content.

Example:

```js
counterValue.innerText = count;
```

### Explanation
- `innerText` changes the visible text inside an element.
- This updates the number displayed on screen.

---

# 6. Conditions

Conditions allow decision making in programs.

Example:

```js
if(count > 0){
    count--;
}
```

### Explanation
- The code inside `if` runs only when the condition is true.
- This prevents the counter from going below zero.

---

# 7. Increment and Decrement Operators

JavaScript provides shorthand operators.

Example:

```js
count++;
```

Means:

```js
count = count + 1;
```

Similarly:

```js
count--;
```

Means:

```js
count = count - 1;
```

Both approaches are correct.

---

# 🧠 Think Before Building

Before writing code, think about these questions:

1. How will the counter value be stored?
2. Which HTML elements need to be selected?
3. What should happen when:
   - increment button is clicked?
   - decrement button is clicked?
   - reset button is clicked?
4. How will the updated value appear on screen?
5. How can we prevent negative values?

Try building the project yourself before checking other solutions.

---

# 📚 Concepts Learned In This Project

After completing this project, you should understand:
- variables
- DOM selection
- event listeners
- functions
- conditions
- updating webpage content dynamically
- basic JavaScript interaction with HTML
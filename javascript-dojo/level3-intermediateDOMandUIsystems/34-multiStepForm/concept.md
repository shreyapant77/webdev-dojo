# Project 34 - Multi-Step Form

## Feature 1 - Next Step Navigation

### Task

Create a form with three steps:

1. Name
2. Email
3. Password

Clicking **Next** should display the next step.

No validation or data storage yet.

---

## Suggested HTML

```html
<h2 class="title"></h2>

<input class="input">

<button class="btn1">Next</button>

<p class="para"></p>
```

---

## New Concept

Use a step counter.

Example:

```javascript
let currentStep = 0;
```

Increase it when the **Next** button is clicked.

Render the correct step based on the current value.

---

## Useful JavaScript

```javascript
currentStep++

if

else if
```

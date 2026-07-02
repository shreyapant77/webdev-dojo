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

# Project 34 - Multi-Step Form

## Feature 2 - Dynamic Form UI

### Task

Display the correct form step by changing:

* Heading
* Input placeholder

based on the current step.

Return to Step 1 after completing the form.

---

## Suggested HTML

```html
<h2 class="title"></h2>

<input class="inpt1">

<button class="btn1">Next</button>

<p class="para"></p>
```

---

## New Concept

Update existing DOM elements instead of creating new ones.

Example:

```javascript
title.innerText = "...";

input.placeholder = "...";
```

Render the UI based on the application's current state.

---

## Useful JavaScript

```javascript
element.innerText

element.placeholder
```


# Project 34 - Multi-Step Form

## Feature 3 - Previous Button

### Task

Allow the user to move to the previous step.

Do not go before Step 1.

Update the form UI whenever the step changes.

---

## Suggested HTML

```html
<button class="btn1">Next</button>

<button class="btn2">Previous</button>
```

---

## New Concept

Multiple event listeners can modify the same application state.

Both buttons change:

```javascript
val
```

Then update the UI.

---

## Useful JavaScript

```javascript
addEventListener()

val++

val--
```

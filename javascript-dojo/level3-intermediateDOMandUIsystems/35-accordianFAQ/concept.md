# Project 35 - Accordion FAQ

## Feature 1 - Single FAQ Toggle

### Task

Build an FAQ where clicking the question shows or hides the answer.

---

## New Concepts

* Object state
* Boolean values (`true` / `false`)
* Toggle logic
* Conditional rendering

---

## Data Structure

```javascript
let faq = {
    question: "...",
    answer: "...",
    open: false
};
```

`open` decides whether the answer is visible.

---

## Useful JavaScript

```javascript
if(faq.open){
    ...
}else{
    ...
}
```




# Project 35 - Accordion FAQ

## Feature 2 - Dynamic FAQ Rendering

### Task

Display multiple FAQs on the screen using an array of objects instead of creating HTML manually.

---

## New Concepts

### 1. Array of Objects

Store multiple FAQs in one array.

```javascript
let faqs = [
    {
        question: "...",
        answer: "...",
        open: false
    }
];
```

---

### 2. `innerHTML`

`innerHTML` allows JavaScript to create HTML elements dynamically.

Example:

```javascript
let output = "<h2>Hello</h2>";
container.innerHTML = output;
```

Unlike `innerText`, the browser treats the string as HTML.

---

### 3. Template Literals

Use backticks (`` ` ``) to write multi-line HTML inside JavaScript.

```javascript
output += `
    <button>Question</button>
    <p>Answer</p>
`;
```

---

### 4. Dynamic Rendering

Build the UI from data.

```text
Array
   ↓
Loop
   ↓
Generate HTML
   ↓
container.innerHTML
```

---

## Useful JavaScript

```javascript
.innerHTML
for(...)
`...`
${value}
```

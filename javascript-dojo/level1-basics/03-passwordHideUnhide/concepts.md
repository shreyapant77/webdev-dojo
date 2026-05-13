# Password Toggle App — Concepts

## 🎯 Goal
Learn how JavaScript can:
- access input fields
- change input types dynamically
- toggle between hidden and visible password

---

# 1. DOM Selection

Select HTML elements using JavaScript.

Example:

```js
let inputAccess = document.querySelector(".inpt");
```

---

# 2. Event Listener

Detect button clicks.

Example:

```js
btnAccess.addEventListener("click", togglePassword);
```

---

# 3. Input Type Attribute

Password fields use:

```html
<input type="password">
```

JavaScript can change this dynamically.

---

# 4. Changing Attributes

Example:

```js
inputAccess.type = "text";
```

Changes hidden password into visible text.

---

# 5. Conditions

Used to check current input type.

Example:

```js
if(inputAccess.type === "text")
```

---

# 6. Updating Text Dynamically

Example:

```js
btnAccess.innerText = "hide";
```

Changes button text dynamically.

---

# ⚠️ Important Notes

## Strings Need Quotes

Correct:

```js
"text"
"password"
"show"
```

Wrong:

```js
text
password
show
```

---

# `=` vs `==` vs `===`

## Assignment

```js
inputAccess.type = "text";
```

Changes value.

---

## Comparison

```js
if(inputAccess.type == "text")
```

Checks value.

---

## Strict Comparison (Preferred)

```js
if(inputAccess.type === "text")
```

Checks:
- value
- datatype

---

# 📚 Concepts Used

- DOM selection
- event listeners
- conditions
- input attributes
- dynamic text updates
- toggling states
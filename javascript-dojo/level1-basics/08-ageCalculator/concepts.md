# Age Calculator — Concepts

## 🎯 Goal

Learn how JavaScript can:
- work with dates
- access user-selected dates
- perform date calculations
- display calculated results

---

# 1. Date Input

HTML provides a date input field.

Example:

```html
<input type="date">
```

This allows users to select a date.

---

# 2. Creating a Date Object

Convert a date into a JavaScript Date object.

Example:

```js
let birthDate = new Date(dateInput.value);
```

---

# 3. Current Date

Get today's date.

Example:

```js
let today = new Date();
```

---

# 4. Getting the Year

Extract year from a Date object.

Example:

```js
today.getFullYear()
```

---

# 5. Subtracting Years

Calculate age using years.

Example:

```js
let age = currentYear - birthYear;
```

---

# 6. Displaying Results

Show calculated age dynamically.

Example:

```js
outputAccess.innerText = age;
```

---

# ⚠️ Important Note

A simple age calculator uses:

```js
currentYear - birthYear
```

This gives an approximate age.

A more accurate version checks:
- birth month
- birth day

and adjusts the result if the birthday has not occurred yet this year.

---

# 📚 Concepts Used

- date input
- Date object
- current date
- getFullYear()
- date calculations
- dynamic output
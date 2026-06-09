# BMI Calculator — Concepts

## 🎯 Goal
Learn how JavaScript can:
- take multiple inputs
- perform calculations
- work with decimal numbers
- display result categories dynamically

---

# 1. Multiple Inputs

Access values from multiple input fields.

Example:

```js
let weight = weightAccess.value;
let height = heightAccess.value;
```

---

# 2. Mathematical Operations

JavaScript can perform calculations.

Example:

```js
weight / (height * height)
```

---

# 3. Decimal Numbers

BMI values are usually decimal numbers.

Example:

```js
24.56
```

---

# 4. `toFixed()`

Limits decimal places.

Example:

```js
bmi.toFixed(2)
```

Example output:

```text
24.56
```

---

# 5. Conditional Ranges

Used to classify BMI.

Example:

```js
if(bmi < 18.5)
```

Possible categories:
- Underweight
- Normal
- Overweight

---

# 6. Dynamic Output

Display calculated BMI dynamically.

Example:

```js
paraAccess.innerText = bmi;
```

---

# 📚 Concepts Used

- multiple inputs
- mathematical calculations
- decimal numbers
- toFixed()
- conditional ranges
- dynamic output
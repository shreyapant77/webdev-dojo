# Number Guessing Game — Concepts

## 🎯 Goal
Learn how JavaScript can:
- generate random numbers
- compare user guesses
- give feedback dynamically
- reset game state

---

# 1. Random Number Generation

Generate random values using:

```js
Math.random()
```

Example:

```js
Math.floor(Math.random() * 100) + 1
```

Generates numbers between:

```text
1 → 100
```

---

# 2. User Input Value

Access input text using:

```js
inputAccess.value
```

---

# 3. `Number()`

Input values are strings by default.

Convert them into numbers using:

```js
Number(inputAccess.value)
```

---

# 4. Comparison Operators

Used to compare values.

Examples:

```js
>
<
===
```

Example:

```js
if(guess > value)
```

---

# 5. Multiple Conditions

Use:

```js
if
else if
else
```

Example:

```js
if(guess > value){
    // too high
}else if(guess < value){
    // too low
}else{
    // correct
}
```

---

# 6. Game State

Store game data in variables.

Example:

```js
let value = random number
```

The game changes depending on this value.

---

# 7. Resetting State

Reset values dynamically.

Example:

```js
inputAccess.value = "";
```

Clears input field.

---

# 📚 Concepts Used

- random numbers
- Number()
- comparison operators
- multiple conditions
- dynamic feedback
- game state
- resetting values
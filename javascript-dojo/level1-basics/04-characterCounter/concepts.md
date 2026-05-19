# Character Counter — Concepts

## 🎯 Goal
Learn how JavaScript can:
- detect typing in real-time
- access user input
- count characters dynamically

---

# 1. Input Event

Runs whenever user types.

Example:

```js
inputAccess.addEventListener("input", updateCount);
```

Unlike `"click"`, this triggers continuously while typing.

---

# 2. `.value`

Accesses text written inside input field.

Example:

```js
inputAccess.value
```

---

# 3. `.length`

Returns total number of characters.

Example:

```js
inputAccess.value.length
```

---

# 4. Dynamic Updates

Update text instantly while typing.

Example:

```js
countAccess.innerText = inputAccess.value.length;
```

---

# 📚 Concepts Used

- input event
- input value
- string length
- live DOM updates
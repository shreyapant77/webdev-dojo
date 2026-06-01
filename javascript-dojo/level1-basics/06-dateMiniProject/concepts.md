# Digital Clock — Concepts

## 🎯 Goal
Learn how JavaScript can:
- access current time
- update UI automatically
- run code continuously after intervals

---

# 1. `Date()`

Creates a date-time object.

Example:

```js
let time = new Date();
```

Used to access current:
- hours
- minutes
- seconds

---

# 2. Getting Current Time

Examples:

```js
time.getHours()
time.getMinutes()
time.getSeconds()
```

---

# 3. `setInterval()`

Runs code repeatedly after fixed time intervals.

Example:

```js
setInterval(updateClock, 1000);
```

Meaning:

```text
run updateClock every 1000 milliseconds
```

---

# 4. Milliseconds

```text
1000 ms = 1 second
```

---

# 5. Dynamic Updates

Update clock text continuously.

Example:

```js
clockAccess.innerText = hours + ":" + minutes + ":" + seconds;
```

---

# 6. String Concatenation

Combine multiple values into one string.

Example:

```js
hours + ":" + minutes
```

---

# 📚 Concepts Used

- Date object
- current time methods
- setInterval()
- milliseconds
- dynamic DOM updates
- string concatenation
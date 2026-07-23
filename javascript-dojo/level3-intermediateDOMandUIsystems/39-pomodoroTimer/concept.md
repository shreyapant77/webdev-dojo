# Concepts — Project 39: Countdown Timer

## 🎯 Goal

Build a countdown timer that can:

* Start
* Pause
* Resume
* Stop at `0`

---

## 🧠 New Concepts

### 1. `setInterval()`

Runs a function repeatedly after a fixed delay.

```javascript
let intervalId = setInterval(timerTick, 1000);
```

---

### 2. `clearInterval()`

Stops a running interval using its ID.

```javascript
clearInterval(intervalId);
```

---

### 3. Interval ID

`setInterval()` returns an ID that must be stored to stop the timer later.

```javascript
let intervalId;
intervalId = setInterval(timerTick, 1000);
```

---

### 4. Prevent Multiple Intervals

Only create a new interval if one isn't already running.

```javascript
if (intervalId === undefined) {
    intervalId = setInterval(timerTick, 1000);
}
```

---

### 5. Timer State

Use variables like `timeLeft` to remember the current countdown value so the timer can pause and resume correctly.

---

## 📝 Suggested HTML

```html
<h1>Countdown Timer</h1>

<p class="timer">10</p>

<button class="btn">Start</button>
<button class="pauseBtn">Pause</button>
```

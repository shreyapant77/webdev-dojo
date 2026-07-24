# Concepts — Project 40: Stopwatch

## 🎯 Goal

Build a stopwatch that can:

* Start
* Pause
* Resume
* Reset

---

## 🧠 New Concept

### Resetting State

Sometimes an application needs to return to its initial state.

Example:

```javascript
time = 0;
watchAccess.innerText = time;

clearInterval(intervalId);
intervalId = undefined;
```

This resets both the displayed time and stops the running timer.

---

## 📝 Previously Learned

* `setInterval()`
* `clearInterval()`
* Interval IDs
* Pause / Resume logic
* Preventing multiple intervals

---

## Suggested HTML

```html
<h1>Stopwatch</h1>

<p class="stopwatch">0</p>

<button class="start">Start</button>
<button class="pause">pause</button>
<button class="reset">Reset</button>
```

# Concepts — Project 41: Keyboard Events Playground

## 🎯 Goal

Learn how JavaScript listens to keyboard input and updates the page when a key is pressed.

---

## 🧠 New Concepts

### 1. `keydown` Event

`keydown` runs whenever a key is pressed.

```javascript
document.addEventListener("keydown", function(event){

});
```

---

### 2. The `event` Object

JavaScript automatically creates an **event object** and passes it to your function. It contains information about the event that occurred.

Example:

```javascript
document.addEventListener("keydown", function(event){
    console.log(event.key);
});
```

Some useful properties are:

* `event.key` → Key pressed (`A`, `Enter`, `1`, etc.)
* `event.code` → Physical keyboard key (`KeyA`, `Digit1`, etc.)
* `event.ctrlKey` → `true` if Ctrl is pressed
* `event.shiftKey` → `true` if Shift is pressed
* `event.altKey` → `true` if Alt is pressed

---

## 📝 Suggested HTML

```html
<h1>Keyboard Events Playground</h1>

<p class="message">
    Press any key...
</p>
```

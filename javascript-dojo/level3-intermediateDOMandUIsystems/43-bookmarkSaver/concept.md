# Concepts — Project 43: Bookmark Saver

## 🎯 Goal

Learn how to store related data inside an object and use it to build the UI.

---

## 🧠 New Concepts

### 1. Objects

Store related information together.

```javascript
let bookmark = {
    name: "Google",
    url: "https://google.com"
};
```

Access values using:

```javascript
bookmark.name
bookmark.url
```

---

### 2. `window.open()`

Open a website in a new browser tab.

```javascript
window.open(bookmark.url, "_blank");
```

`"_blank"` opens the URL in a new tab.

---

## 📝 Previously Learned

* `document.createElement()`
* `appendChild()`
* `remove()`
* Dynamic event listeners (`addEventListener()`)

---

## Suggested HTML

```html
<h1>Bookmark Saver</h1>

<input
    type="text"
    class="bname"
    placeholder="Enter bookmark name"
>

<input
    type="text"
    class="burl"
    placeholder="Enter bookmark URL"
>

<button class="addBtn">Add</button>

<div class="bookmarkContainer"></div>
```

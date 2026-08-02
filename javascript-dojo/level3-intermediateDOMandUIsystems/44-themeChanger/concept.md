# Concepts — Project 44: Theme Customizer

## 🎯 Goal

Learn how to update multiple CSS properties dynamically using JavaScript.

---

## 🧠 New Concepts

### 1. `<select>`

Creates a dropdown menu.

```html
<select class="bgColor">
    <option value="white">White</option>
    <option value="black">Black</option>
</select>
```

Read the selected value using:

```javascript
select.value
```

---

### 2. Changing CSS with JavaScript

Update styles dynamically using the `style` object.

```javascript
document.body.style.backgroundColor = bgAccess.value;
document.body.style.color = txtAccess.value;
document.body.style.fontSize = fontSizeAccess.value;
```

---

### 3. CSS Units

Some CSS properties require units.

```text
14px
18px
24px
```

Store the full value (including `px`) in the `<option>` values.

---

## Suggested HTML

```html
<select class="bgColor"></select>
<select class="txtColor"></select>
<select class="fSize"></select>

<button class="btn">Apply Theme</button>
```

# Your Task

Build a modal popup system.

The user should be able to:

* click **Open Modal**
* see a popup appear
* click **Close Modal**
* hide the popup again

---

# New Concepts

## Showing and Hiding Elements

JavaScript can control whether an HTML element is visible.

Example:

```javascript
modal.style.display = "none";
```

Hides the element.

Example:

```javascript
modal.style.display = "block";
```

Shows the element.

You will use this concept to control whether the popup is visible.

---

# Suggested HTML

```html
<button class="openModal">Open Modal</button>

<div class="modal">
    <h2>This is a popup modal</h2>
    <p>Welcome to popup modal.</p>
    <button class="closeModal">Close Modal</button>
</div>
```

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


# Your Task

Allow the user to close the modal by:

* clicking the close button
* clicking outside the modal

Clicking inside the modal should not close it.

---

# New Concepts

## Event Bubbling

When an element is clicked, the click travels upward through parent elements.

Example:

```text id="jlwm6t"
BUTTON
↑
DIV
↑
BODY
```

Clicking the button can trigger all three click handlers.

---

## Event Object

The browser creates an event object whenever an event occurs and passes it to the event handler.

Example:

```javascript id="a3k3cu"
function(event){
    console.log(event);
}
```

---

## stopPropagation()

Stops the event from continuing to parent elements.

Example:

```javascript id="2z0ytk"
event.stopPropagation();
```

---

# Suggested HTML

```html id="n4n5v4"
<button class="openModal">Open Modal</button>

<div class="overlay">
    <div class="modal">
        <h2>This is a popup modal</h2>
        <button class="closeModal">Close Modal</button>
    </div>
</div>
```

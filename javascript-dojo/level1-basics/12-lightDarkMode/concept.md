# Light / Dark Mode Toggle

## Task

Build an app that:

- starts in light mode
- changes to dark mode when a button is clicked
- changes back to light mode when clicked again

---

## Application State

State is information that describes the current condition of an application.

Example:

```js
let darkMode = false;
```

Possible states:

```text
false → Light Mode
true  → Dark Mode
```

---

## Boolean Values

A boolean can only have two values:

```js
true
false
```

Example:

```js
let isLoggedIn = true;
```

---

## Toggle Pattern

Switch between two states.

Example:

```js
darkMode = !darkMode;
```

Meaning:

```text
true  → false
false → true
```

---

## Updating Styles Dynamically

JavaScript can change styles while the page is running.

Example:

```js
document.body.style.backgroundColor = "black";
```

---

## Common Mistake

Don't create the state variable inside the function.

❌

```js
function toggle(){
    let darkMode = false;
}
```

The value resets every click.

✅

```js
let darkMode = false;
```

outside the function.

---

## Concepts Introduced

- application state
- boolean values
- toggle pattern
- dynamic style updates
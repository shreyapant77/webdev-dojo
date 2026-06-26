# Project 31 - Form Validation

## Goal

Learn how to validate user input before accepting it.

---

## Feature 1 - Validate Name

### Task

* Take a name as input.
* If the name has fewer than 3 characters, show an error.
* Otherwise, show a success message.

---

## Suggested HTML

```html
<h1>Form Validation</h1>

<input class="name" placeholder="Enter your name">

<button class="btn1">
Validate
</button>

<p class="para"></p>
```

---

## Concepts Learned

* DOM Selection
* Reading input values
* String length
* if-else
* Rendering output

---

## Useful JavaScript

```js
input.value

string.length

if (...) {

} else {

}
```

---

## Expected Output

```
❌ Name must be at least 3 characters.
```

or

```
✅ Name is valid.
```
# Project 31 - Form Validation

## Feature 2 - Validate Email

### Goal

Extend the form to validate both the **name** and **email** before showing a success message.

---

## Task

Create a form with:

* Name input
* Email input
* Submit button
* Output paragraph

Validation Rules:

* Name must contain **at least 3 characters**.
* Email must contain **"@"**.
* If either validation fails, show an appropriate error message.
* If both are valid, show:

```text
✅ Registration Successful
```

---

## Suggested HTML

```html
<h1>Form Validation</h1>

<input class="inpt1" placeholder="Enter Name">

<input class="inpt2" placeholder="Enter Email">

<button class="btn1">Submit</button>

<p class="para"></p>
```

---

## New Concept Learned

### String.includes()

Checks whether a string contains another string.

Syntax:

```javascript
string.includes(value)
```

Example:

```javascript
let email = "abc@gmail.com";

email.includes("@");   // true
email.includes("#");   // false
```

Returns:

* `true` → value exists
* `false` → value does not exist

---

## Useful JavaScript

```javascript
input.value

string.length

string.includes("@")

if

else
```

---

## Expected Output

Examples:

```text
❌ Name must be at least 3 characters.
```

```text
❌ Invalid Email.
```

```text
✅ Registration Successful.
```

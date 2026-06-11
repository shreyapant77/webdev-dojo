# Simple Calculator

## Task

Build a calculator that:

- takes two numbers
- lets the user choose an operation
- displays the result

Operations:

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

---

## Select Element

Used when the user must choose one option from many.

Example:

```html
<select class="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
</select>
```

---

## Accessing Selected Option

Just like an input field has:

```js
inputAccess.value
```

a select element also has:

```js
operatorAccess.value
```

Example:

```js
let operator = operatorAccess.value;
```

If the user selects:

```text
+
```

then:

```js
operator
```

contains:

```text
+
```

---

## Arithmetic Operators

JavaScript provides arithmetic operators.

```js
a + b
a - b
a * b
a / b
```

---

## Branching Based On User Choice

Perform different calculations depending on the selected operator.

Example:

```js
if(operator === "+"){
    result = a + b;
}
```

---

## Result Variable Pattern

Store the answer first.

Example:

```js
let result;
```

Then:

```js
result = a + b;
```

Display the result after all calculations are complete.

---

## Common Mistake

Without Number():

```js
"5" + "3"
```

becomes:

```text
53
```

instead of:

```text
8
```

---

## Concepts Introduced

- select element
- option values
- accessing selected option
- arithmetic operators
- branching based on user choice
- result variable pattern
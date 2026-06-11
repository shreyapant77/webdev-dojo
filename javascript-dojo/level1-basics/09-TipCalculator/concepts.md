# Tip Calculator

## Task

Build an app where a user enters:

- Bill Amount
- Tip Percentage

and the app calculates:

- Tip Amount
- Total Amount

---

## Percentage Calculation

To find a percentage of a number:

```js
amount * percentage / 100
```

Example:

```js
500 * 10 / 100
```

Result:

```text
50
```

---

## Storing Intermediate Results

Large calculations are easier to understand when broken into steps.

Example:

```js
let tipAmount = bill * tipPercent / 100;
let total = bill + tipAmount;
```

---

## toFixed()

Used to limit decimal places.

Example:

```js
total.toFixed(2)
```

Output:

```text
523.47
```

---


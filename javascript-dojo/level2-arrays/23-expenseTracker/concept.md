# Expense Tracker

## Task

Build an app that:

- add expenses
- display all expenses
- calculate total spending
- calculate average spending

Example:

Expenses:

```js
[500, 200, 150]
```

Total:

```text
850
```

Average:

```text
283.33
```

---

## Reusing Existing Logic

Marks Analyzer:

```js
sum += marks[i];
```

Expense Tracker:

```js
sum += expenses[i];
```

The logic is the same.

Only the meaning of the data changes.

---

## Meaningful Variable Names

Example:

```js
let expenses = [];
```

instead of:

```js
let arr = [];
```

Good names make code easier to understand.

---

## Currency Formatting

Example:

```js
"₹" + amount
```

Output:

```text
₹500
```

---

## Concepts Introduced

- reinforcing accumulator pattern
- working with monetary values
- meaningful variable naming
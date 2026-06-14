# Local vs Global Variables

## Global Variable

Declared outside a function.

Example:

```js
let count = 0;

function increase() {
    count++;
}
```

### When to Use

Use when the value must be remembered between function calls.

Examples:

- Counter value
- Dark mode state
- Score in a game
- Todo list

---

## Local Variable

Declared inside a function.

Example:

```js
function calculate() {
    let total = 10 + 20;
    console.log(total);
}
```

### When to Use

Use when the value is only needed temporarily during that function call.

Examples:

- BMI result
- Tip amount
- Age calculation
- Temporary calculations

---

## Key Difference

Global variables persist after the function finishes.

```js
let count = 0;

function increase() {
    count++;
}
```

Clicks:

```text
1
2
3
4
```

Local variables are recreated every time the function runs.

```js
function increase() {
    let count = 0;
    count++;
}
```

Clicks:

```text
1
1
1
1
```

because `count` is destroyed when the function ends.

---

## Rule of Thumb

Ask yourself:

"Do I need this value later?"

YES → Global Variable

NO → Local Variable
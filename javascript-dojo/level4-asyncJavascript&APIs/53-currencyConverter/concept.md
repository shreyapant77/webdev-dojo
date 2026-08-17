# Concepts — Currency Converter

## 1. Dynamic API Query

Build API URLs using user input:

```js
`...?amount=${amount}&from=${from}&to=${to}`
```

Use `encodeURIComponent()` for user-provided values.

## 2. Dynamic Property Access ⭐

API response:

```js
data.rates
```

Currency code is dynamic, so:

```js
data.rates[to]
```

instead of:

```js
data.rates.INR
```

If:

```js
to = "INR";
```

then:

```js
data.rates[to]
```

means:

```js
data.rates["INR"]
```

**Use bracket notation when the property name comes dynamically from a variable.**

## 3. Input → Number

```js
let amount = Number(amountAccess.value);
```

Form inputs return strings, so convert numeric input before calculations/API usage.

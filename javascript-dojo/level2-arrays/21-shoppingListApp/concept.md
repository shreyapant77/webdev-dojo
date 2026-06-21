# Shopping List App

## Task

Build an app that:

- add shopping items
- delete shopping items
- mark items as purchased
- render the updated shopping list

Example:

Milk ❌
Bread ✅
Eggs ❌

---

## Reusing Existing Ideas

A shopping list can be represented exactly like a todo list.

Example:

```js
{
    item: "Milk",
    purchased: false
}
```

---

## Naming Matters

Choose names that describe the data.

Example:

```js
let shoppingList = [];
```

instead of:

```js
let arr = [];
```

---

## Different App, Same Concepts

Todo App:

```js
{
    text: "Learn JS",
    completed: true
}
```

Shopping List:

```js
{
    item: "Milk",
    purchased: true
}
```

The structure changes.

The logic remains similar.

---

## Concepts Introduced

- reinforcing arrays of objects
- meaningful naming
- applying existing logic to a new problem
# Search Bar Filter

## Task

Build an app that:

- store items in an array
- enter a search term
- display only matching items

Example:

Items:

```js
[
    "Laptop",
    "Phone",
    "Keyboard",
    "Mouse"
]
```

Search:

```text
ph
```

Output:

```text
Phone
```

---

## Searching

Check whether text exists inside another text.

Example:

```js
"Laptop".includes("top")
```

Result:

```text
true
```

Example:

```js
"Laptop".includes("abc")
```

Result:

```text
false
```

---

## Filtering With includes()

Example:

```js
if(items[i].includes(searchText)){
    output += items[i];
}
```

Only matching items are displayed.

---

## Case Sensitivity

Example:

```js
"Phone" !== "phone"
```

Convert both strings to lowercase before comparing.

Example:

```js
items[i].toLowerCase()
```

```js
searchText.toLowerCase()
```

---

## Concepts Introduced

- string searching
- includes()
- case-insensitive search
- text filtering
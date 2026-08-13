# Concepts — Country Info App

## 1. Dynamic API URL

User input can be inserted into a URL:

```js
let url = `https://countries.dev/alpha/${encodeURIComponent(country_name)}`;
```

`encodeURIComponent()` safely encodes user input for a URL.

---

## 2. API → JSON → JavaScript

```js
let response = await fetch(url);
let data = await response.json();
```

Pattern:

```text
fetch()
 ↓
Response
 ↓
response.json()
 ↓
JavaScript data
```

---

## 3. Nested Objects

Access properties through `.`:

```js
data.name
data.population
data.capital
data.currencies
```

---

## 4. Arrays Inside Objects

API data can contain arrays:

```js
data.languages
```

To access the first element:

```js
data.languages[0]
```

Then access its property:

```js
data.languages[0].name
```

Pattern:

```text
object → property → array → index → property
```

---

# 5. `map()` ⭐

`map()` goes through **every element of an array**, transforms each element, and returns a **new array**.

Example:

```js
let numbers = [1, 2, 3];

let doubled = numbers.map(function(number){
    return number * 2;
});
```

Result:

```js
[2, 4, 6]
```

### Mental Model

```text
[1, 2, 3]
 ↓ map()
1 → 2
2 → 4
3 → 6
 ↓
[2, 4, 6]
```

### API Example

```js
let languages = data.languages.map(function(language){
    return language.name;
});
```

If the API gives:

```js
[
    { name: "Hindi" },
    { name: "English" }
]
```

`map()` produces:

```js
["Hindi", "English"]
```

### Important

The parameter represents the **current element**:

```js
function(language)
```

So:

```js
return language.name;
```

is correct.

This is wrong:

```js
return languages.name;
```

because `languages` is the **whole array**, not the current object.

### General Pattern

```js
let newArray = oldArray.map(function(item){
    return transformedValue;
});
```

Think:

```text
old array
   ↓
each item
   ↓
transform item
   ↓
new array
```

`map()` does **not** modify the original array.

---

## 6. API Data → DOM

After processing the API data:

```js
clang.innerText = languages;
```

General frontend pattern:

```text
API
 ↓
JavaScript data
 ↓
process/transform
 ↓
DOM
```

## Main Takeaway

The most important new concept in this project is:

```js
array.map(...)
```

Use `map()` when you want to **transform every element of an array into something else**.

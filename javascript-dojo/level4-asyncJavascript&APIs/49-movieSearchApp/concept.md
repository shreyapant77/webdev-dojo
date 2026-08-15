# Concepts — Show Search App

## 1. Dynamic API URL

Build the API URL using user input:

```js
let url = `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(movie)}`;
```

`encodeURIComponent()` safely puts user input inside a URL.

---

## 2. Fetch + JSON

```js
let response = await fetch(url);
let data = await response.json();
```

Pattern:

```text
fetch()
→ response
→ response.json()
→ JavaScript data
```

`response.json()` is asynchronous, so use `await`.

---

## 3. HTTP Error Handling

```js
if(!response.ok){
    throw new Error("Request failed");
}
```

`fetch()` does **not** automatically throw an error for HTTP errors such as 404.

---

## 4. API Data → DOM

```js
nameAccess.innerText = data.name;
pAccess.innerText = data.premiered;
```

Read properties from the API object and display them in the page.

---

## 5. Arrays from APIs

Example:

```js
data.genres
```

can be an array:

```js
["Drama", "Crime"]
```

Access an element with:

```js
data.genres[0]
```

---

## 6. `map()`

`map()` transforms **every element** and returns a new array.

```js
let names = data.languages.map(function(language){
    return language.name;
});
```

Mental model:

```text
array
 ↓
each item
 ↓
transform
 ↓
new array
```

Use `map()` when you actually need to transform elements. Don't use it when returning each element unchanged.

---

## 7. Missing API Data

API properties may be `null` or missing.

Check before accessing nested properties:

```js
if(data.image !== null){
    imgAccess.src = data.image.medium;
}
```

Pattern:

```text
Does data exist?
→ YES: use it
→ NO: handle it safely
```

---

## Main Pattern

```text
User input
→ encode URL
→ fetch
→ check response
→ await JSON
→ read API data
→ handle missing data
→ update DOM
```

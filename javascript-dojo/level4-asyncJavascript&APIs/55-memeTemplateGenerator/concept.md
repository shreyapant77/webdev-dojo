# Concepts — Meme Template Explorer

## 1. `.find()` ⭐

Searches an array and returns the **first element** matching a condition.

```js
let selectedMeme = memes.find(function(meme){
    return meme.id === selectedId;
});
```

Useful when:

```text
You have an ID
   ↓
Search array of objects
   ↓
Get the matching object
```

Unlike `map()`, `.find()` returns **one matching item**, not a new array.

---

## 2. Dynamic `<select>` Options

Create dropdown options from API data:

```js
let option = document.createElement("option");

option.value = meme.id;
option.innerText = meme.name;

templateAccess.appendChild(option);
```

`option.value` stores data that can later be retrieved using:

```js
templateAccess.value
```

## 3. Using API Data to Update DOM

```js
imgAccess.src = selectedMeme.url;
```

API object → property → DOM property.

### Main Pattern

```text
API array
→ dynamic <option>
→ selected ID
→ .find()
→ matching object
→ display its data
```

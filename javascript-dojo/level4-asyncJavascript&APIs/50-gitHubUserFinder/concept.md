# Concepts — GitHub User Finder

## 1. Dynamic API URL

Build the endpoint using user input:

```js
let url = `https://api.github.com/users/${encodeURIComponent(username)}`;
```

`encodeURIComponent()` safely inserts user input into a URL.

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
→ await response.json()
→ JavaScript object
```

---

## 3. HTTP Error Handling

`fetch()` does not automatically throw for HTTP errors.

```js
if(!response.ok){
    throw new Error("User not found");
}
```

Then:

```js
catch(error){
    console.log(error);
}
```

---

## 4. One Response → Many Properties

One API request can provide many pieces of information:

```js
data.name
data.bio
data.public_repos
data.followers
data.following
data.avatar_url
```

No separate request is needed when the information is already in the response.

---

## 5. Dynamic Images

An API can provide an image URL:

```js
imgAccess.src = data.avatar_url;
```

For an `<img>` element, use `.src`.

---

## 6. Loading State

Because `fetch()` is asynchronous, the UI can show a message while waiting:

```js
msgAccess.innerText = "Loading...";
```

Then clear it after success:

```js
msgAccess.innerText = "";
```

Pattern:

```text
Start request
→ Loading...
→ Success / Error
```

---

## Main Pattern

```text
User input
→ encode URL
→ fetch()
→ check response.ok
→ await JSON
→ read API object
→ update DOM
→ handle loading/error
```

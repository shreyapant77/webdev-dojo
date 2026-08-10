# Project 46 — Random Joke App

## 1. API

**API (Application Programming Interface)** lets one program request data from another program.

```text
Our JS → API → Server
Our JS ← API ← Server
```

We use an API because the joke data is not stored in our application.

**Endpoint:** URL where a particular API resource can be requested.

---

## 2. JSON

APIs commonly send data as **JSON (JavaScript Object Notation)**.

Example response:

```json
{
  "setup": "Why did the chicken cross the road?",
  "punchline": "To get to the other side!"
}
```

After parsing, it becomes a normal JavaScript object:

```javascript
data.setup
data.punchline
```

### JSON conversion

```javascript
JSON.parse(jsonString);       // JSON string → JS value
JSON.stringify(jsObject);     // JS value → JSON string
```

`fetch()` responses are commonly converted using:

```javascript
response.json()
```

---

# 3. `fetch()`

`fetch()` makes a network request.

```javascript
let response = await fetch(url);
```

Important:

> `fetch()` returns a **Promise**, not the final data.

```text
fetch(url)
   ↓
Promise
   ↓
Response
```

---

# 4. Promise

A Promise represents a value that will be available later.

```text
Pending
  ↓
 ┌───────────┐
 ↓           ↓
Fulfilled   Rejected
```

Network requests take time, so JavaScript cannot assume the data is immediately available.

### Promise style

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

### Async/await style

```javascript
let response = await fetch(url);
let data = await response.json();
```

Both represent the same asynchronous flow.

---

# 5. `async`

`await` can be used inside an `async` function.

```javascript
async function getJoke() {
    // await can be used here
}
```

An `async` function always returns a Promise.

---

# 6. `await`

`await` waits for a Promise to settle before continuing **that async function**.

```javascript
let response = await fetch(url);
```

Means:

```text
Start request
    ↓
Wait for Promise
    ↓
Continue when response is available
```

It does **not freeze the entire browser**.

---

# 7. `response`

The result of `fetch()` is a **Response object**.

```javascript
let response = await fetch(url);
```

It contains information about the HTTP response.

It is **not yet the parsed API data**.

---

# 8. `response.json()`

```javascript
let data = await response.json();
```

`response.json()` reads/parses the JSON response body.

Important:

> `response.json()` also returns a Promise.

Therefore we use:

```javascript
await response.json();
```

Complete flow:

```text
fetch()
  ↓
Promise
  ↓
Response
  ↓
response.json()
  ↓
Promise
  ↓
JavaScript object
```

---

# 9. HTTP Status / `response.ok`

`fetch()` does not automatically reject for HTTP errors such as `404` or `500`.

Therefore check:

```javascript
if (!response.ok) {
    throw new Error("Failed to fetch joke");
}
```

`response.ok` is:

```text
true  → request has a successful HTTP status
false → HTTP request failed
```

Useful properties:

```javascript
response.ok
response.status
```

---

# 10. `try / catch`

API requests can fail.

Use:

```javascript
try {
    // risky asynchronous operation
}
catch(error) {
    // handle failure
}
```

Pattern:

```text
try
 ↓
attempt request
 ↓
success → continue

failure
 ↓
catch
```

---

# 11. `throw new Error()`

`response.ok` being false does not automatically enter `catch`.

We manually create an error:

```javascript
if (!response.ok) {
    throw new Error("Failed to fetch joke");
}
```

`throw` transfers control to `catch`.

```text
response.ok === false
        ↓
throw Error
        ↓
catch(error)
```

---

# 12. `finally`

`finally` runs whether the request succeeds or fails.

```javascript
try {
    // request
}
catch(error) {
    // failure
}
finally {
    // always runs
}
```

We used it to re-enable the button:

```javascript
finally {
    btnAccess.disabled = false;
}
```

Why?

Both paths need the button enabled:

```text
              Request
                 ↓
          ┌──────┴──────┐
          ↓             ↓
       Success         Error
          ↓             ↓
        try            catch
          └──────┬──────┘
                 ↓
              finally
                 ↓
          enable button
```

---

# 13. Loading State

Network requests take time.

So immediately before requesting data:

```javascript
setupAccess.innerText = "Loading joke...";
punchlineAccess.innerText = "";
```

This tells the user that work is happening.

General UI pattern:

```text
Start request
     ↓
  LOADING
     ↓
 ┌───┴────┐
 ↓        ↓
SUCCESS  ERROR
```

---

# 14. Error State

Don't only log errors:

```javascript
console.log(error);
```

The user should also see an error state:

```javascript
setupAccess.innerText =
    "There was an error loading the joke. Please try again";

punchlineAccess.innerText = "";
```

General rule:

> Console errors help the developer; UI errors help the user.

---

# 15. Disable UI During Request

Prevent multiple requests while one request is running:

```javascript
btnAccess.disabled = true;
```

Re-enable it after completion:

```javascript
finally {
    btnAccess.disabled = false;
}
```

Pattern:

```text
Click
 ↓
Disable button
 ↓
API request
 ↓
Success / Error
 ↓
finally
 ↓
Enable button
```

---

# 16. Complete API Pattern

The main pattern learned in this project:

```javascript
async function getData() {

    // Loading state
    showLoading();

    try {

        // Request
        let response = await fetch(url);

        // HTTP error check
        if (!response.ok) {
            throw new Error("Request failed");
        }

        // Parse JSON
        let data = await response.json();

        // Success → update UI
        updateUI(data);

    }
    catch(error) {

        // Failure → update UI
        showError(error);

    }
    finally {

        // Always perform cleanup
        enableUI();
    }
}
```

---

# 17. Project 46's Complete Flow

```text
Button click
     ↓
getJoke()
     ↓
Show loading state
     ↓
Disable button
     ↓
fetch(API endpoint)
     ↓
await Response
     ↓
response.ok ?
   ↙       ↘
 false     true
  ↓         ↓
 throw    response.json()
  ↓         ↓
 catch    await data
  ↓         ↓
 error    display joke
   ↘       ↙
      finally
         ↓
   enable button
```

---

# 18. Core Rules to Remember

### Rule 1

`fetch()` returns a Promise.

```javascript
await fetch(url)
```

### Rule 2

`fetch()` gives a `Response`, not the final JSON object.

```javascript
let response = await fetch(url);
```

### Rule 3

Parse the response:

```javascript
let data = await response.json();
```

### Rule 4

Check HTTP success yourself:

```javascript
if (!response.ok) {
    throw new Error("Request failed");
}
```

### Rule 5

Use `try/catch` for failure handling.

### Rule 6

Use `finally` for cleanup that must happen regardless of success/failure.

### Rule 7

Give the user feedback:

```text
Loading → Success / Error
```

### Rule 8

Disable controls during important async operations to prevent duplicate requests.

---

# 🔑 The Pattern to Carry Forward

For future API projects, start by thinking:

```text
1. What endpoint do I need?
2. What data does the API return?
3. Show loading state.
4. Disable relevant UI.
5. fetch()
6. await response
7. Check response.ok
8. response.json()
9. Use the data
10. Show error if something fails
11. finally → cleanup UI
```

This pattern will be reused throughout Level 4.

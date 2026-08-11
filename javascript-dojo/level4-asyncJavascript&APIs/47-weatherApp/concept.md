# Concepts — Weather App

## 1. Query Parameters

Send extra information through a URL:

```text
?name=Delhi&count=1
```

* `?` → starts query parameters
* `&` → separates parameters

Dynamic URL:

```js
`...?name=${encodeURIComponent(city)}`
```

---

## 2. `encodeURIComponent()`

Safely puts user input inside a URL.

```js
encodeURIComponent("New Delhi")
// "New%20Delhi"
```

Use it when user input becomes part of a URL.

---

## 3. API Response Structure

Don't guess an API's structure.

```js
console.log(data);
```

Inspect the response first, then access nested data:

```js
data.results[0].latitude
data.current.temperature_2m
```

Remember:

```text
object → property → array → index → property
```

---

## 4. Dependent API Requests

Sometimes one API request gives information required for another.

```text
City
 ↓
Geocoding API
 ↓
latitude + longitude
 ↓
Weather API
 ↓
Weather data
```

This is a common real-world API pattern.

---

## 5. Multiple `await`s

Every asynchronous operation may need its own `await`.

```js
let response = await fetch(url);
let data = await response.json();

let weatherResponse = await fetch(weatherUrl);
let weatherData = await weatherResponse.json();
```

`response.json()` also returns a Promise.

---

## 6. Input Validation

Check user input before making a request.

```js
let city = cityAccess.value.trim();

if (city === "") {
    return;
}
```

`trim()` removes leading/trailing whitespace.

---

## 7. `response.ok`

`fetch()` does not automatically throw for HTTP errors such as `404`.

Check manually:

```js
if (!response.ok) {
    throw new Error("Request failed");
}
```

Then `catch` handles the error.

---

## 8. Error Handling

Use:

```js
try {
    // API work
}
catch (error) {
    console.log(error);
}
```

Pattern:

```text
try
 ↓
request
 ↓
validate response
 ↓
parse JSON
 ↓
use data

error → catch
```

---

## 9. API Data → DOM

API data is JavaScript data. Extract what you need and render it:

```js
tempAccess.innerText =
    weatherData.current.temperature_2m;
```

General pattern:

```text
API → JavaScript data → DOM
```

### Main takeaway

The biggest new pattern from this project:

```text
User Input
   ↓
Build Dynamic URL
   ↓
API Request #1
   ↓
Extract Data
   ↓
API Request #2
   ↓
Extract Data
   ↓
Update DOM
```

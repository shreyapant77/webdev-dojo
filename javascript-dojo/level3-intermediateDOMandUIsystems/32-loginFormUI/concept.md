# Project 32 - Login Form UI

## Feature 1 - Verify Username

### Goal

Learn how to compare user input with stored data.

---

## Task

Create:

* Username input
* Login button
* Output paragraph

Store a user object in JavaScript.

When Login is clicked:

* If the username matches, show success.
* Otherwise show an error.

---

## Suggested HTML

```html
<h1>Login Form</h1>

<input class="username" placeholder="Enter Username">

<button class="btn1">Login</button>

<p class="para"></p>
```

---

## New Concept Learned

### Object Property Access

Store information inside an object.

Example:

```javascript
let user = {
    username: "admin"
};
```

Access a property using:

```javascript
user.username
```

---

## Useful JavaScript

```javascript
object.property

if

else
```

---

## Expected Output

```text
✅ Username Found
```

or

```text
❌ Invalid Username
```


# Project 32 - Login Form UI

## Feature 2 - Verify Password

### Task

Add a password input.

Store:

```javascript
let user = {
    username: "admin123",
    password: "pass123"
};
```

Login succeeds only if **both** username and password match.

---

## Suggested HTML

```html
<input class="inpt1" placeholder="Username">

<input class="inpt2" type="password" placeholder="Password">

<button class="btn1">Login</button>

<p class="para"></p>
```

---

## New Concept

Logical AND (`&&`)

```javascript
if(condition1 && condition2){
    // both conditions must be true
}
```

---

## Useful JavaScript

```javascript
&&

object.property
```

---

## Expected Output

```text
✅ Login Successful
```

or

```text
❌ Invalid Username or Password
```

# Project 33 - Signup Validation

## Feature 1 - Register User

### Task

Create a signup form.

When the user clicks **Signup**:

* Create a user object.
* Store it inside an array.
* Show a success message.

---

## Suggested HTML

```html
<h1>Signup Form</h1>

<input class="inpt1" placeholder="Username">

<input class="inpt2" type="password" placeholder="Password">

<button class="btn1">Signup</button>

<p class="para"></p>
```

---

## New Concept

Store **multiple users** inside an array.

Example:

```javascript
let users = [];

users.push({
    username: "admin",
    password: "123456"
});
```

---

## Useful JavaScript

```javascript
array.push()

objects

arrays
```

---

## Expected Output

```text
✅ User Registered
```


# Project 33 - Signup Validation

## Feature 2 - Prevent Duplicate Usernames

### Task

Before adding a new user:

* Check whether the username already exists.
* If it exists, show an error.
* Otherwise, add the user.

---

## New Concept

Loop through an array to search for existing data.

Example:

```javascript
for(let i = 0; i < users.length; i++){
    if(users[i].username == enteredUsername){
        // Username already exists
    }
}
```

---

## Useful JavaScript

```javascript
for

array.length

object.property
```

---

## Expected Output

```
❌ Username already exists.
```

or

```
✅ User Registered.
```


# Project 34 - Multi-Step Form

## Feature 2 - Dynamic Form UI

### Task

Display the correct form step by changing:

* Heading
* Input placeholder

based on the current step.

Return to Step 1 after completing the form.

---

## Suggested HTML

```html
<h2 class="title"></h2>

<input class="inpt1">

<button class="btn1">Next</button>

<p class="para"></p>
```

---

## New Concept

Update existing DOM elements instead of creating new ones.

Example:

```javascript
title.innerText = "...";

input.placeholder = "...";
```

Render the UI based on the application's current state.

---

## Useful JavaScript

```javascript
element.innerText

element.placeholder
```

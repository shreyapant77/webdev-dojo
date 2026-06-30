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

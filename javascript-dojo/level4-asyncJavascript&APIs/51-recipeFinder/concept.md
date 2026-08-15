# Concepts — Recipe Finder

## 1. API Response Can Contain Arrays

The API returns:

```js
data.meals
```

which is an array.

To access the first meal:

```js
let meal = data.meals[0];
```

Pattern:

```text
data
 ↓
meals
 ↓
[0]
 ↓
meal object
```

---

## 2. Bracket Notation

Two ways to access object properties:

### Dot notation

```js
person.name
```

Use when the property name is **known**.

### Bracket notation

```js
person["name"]
```

Same result, but bracket notation becomes important when the property name is **dynamic**.

---

## 3. Dynamic Property Access ⭐

The API stores ingredients as:

```text
strIngredient1
strIngredient2
strIngredient3
...
strIngredient20
```

Instead of manually accessing every property, build the property name:

```js
meal["strIngredient" + i]
```

When:

```js
i = 1
```

JavaScript evaluates:

```js
"strIngredient" + 1
```

→

```js
"strIngredient1"
```

When:

```js
i = 2
```

→

```js
"strIngredient2"
```

### Mental Model

```text
known property
→ dot notation

dynamic property
→ bracket notation
```

Example:

```js
let property = "name";

person[property];
```

JavaScript uses the **value of `property`** as the property name.

---

## 4. Loop + Dynamic Property

```js
for(let i = 1; i <= 20; i++){
    let ingredient = meal["strIngredient" + i];

    if(ingredient){
        console.log(ingredient);
    }
}
```

This checks every possible ingredient field and ignores empty values.

---

## 5. Building a String

```js
let list = "";

list += ingredient + "\n";
```

`+=` adds to the existing string.

`\n` creates a new line.

---

## Main Takeaway

**Bracket notation is especially useful when the property name needs to be created or selected dynamically.**

```js
object[property]
```

is different from:

```js
object.property
```

because `property` can be a variable or expression.

### Project Pattern

```text
API array
→ get object
→ build property name dynamically
→ bracket notation
→ loop through properties
→ collect useful values
→ display result
```

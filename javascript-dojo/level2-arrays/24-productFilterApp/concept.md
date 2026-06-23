# Product Filter App

## Task

Build an app that:

- store products in an array
- display all products
- filter products based on a category
- render only matching products

Example:

```js
[
    {
        name: "Laptop",
        category: "Electronics"
    },
    {
        name: "Shirt",
        category: "Clothing"
    }
]
```

---

## Filtering

Sometimes we do not want to display everything.

Example:

```text
Show only Electronics
```

We must check each product.

Example:

```js
if(product.category == "Electronics")
```

---

## Condition Inside Loop

Example:

```js
for(let i=0;i<products.length;i++){

    if(products[i].category=="Electronics"){
        output+=products[i].name;
    }

}
```

The loop visits every product.

The condition decides whether it should be displayed.

---

## Arrays Of Objects

Each product contains multiple values.

Example:

```js
{
    name:"Laptop",
    category:"Electronics"
}
```

---

## User Input As Filter

Example:

```text
Electronics
```

Only products belonging to that category should be rendered.

---

## Concepts Introduced

- filtering data
- condition inside loops
- selective rendering
- searching through arrays of objects
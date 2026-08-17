# Concepts — Dictionary App

## 1. Nested API Data

Navigate arrays and objects step-by-step:

```js
data[0].defs[0]
```

Pattern:

```text
array → object → array → value
```

## 2. Empty API Results

An API may return an empty array:

```js
if(data.length === 0){
    // no result
}
```

Always check before accessing `data[0]`.

## 3. API Response Shapes

Different APIs return data in different structures.
Always inspect the JSON response first, then navigate according to its actual shape.

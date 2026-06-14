# Temperature Converter

## Task

Build an app that:

- takes a temperature value as input
- lets the user choose a conversion type
- displays the converted temperature

Examples:

```text
25°C → 77°F
77°F → 25°C
```

---

## Conversion Formulas

Celsius to Fahrenheit:

```js
(c * 9/5) + 32
```

Example:

```text
25°C → 77°F
```

---

Fahrenheit to Celsius:

```js
(f - 32) * 5/9
```

Example:

```text
77°F → 25°C
```

---

## Using select

A select element allows the user to choose one option from multiple choices.

Example:

```html
<select class="conversion">
    <option value="ctof">Celsius to Fahrenheit</option>
    <option value="ftoc">Fahrenheit to Celsius</option>
</select>
```

Access selected value:

```js
conversionAccess.value
```

---

## Conditional Formula Selection

Different formulas are applied depending on the selected option.

Example:

```js
if(conversionAccess.value=="ctof"){
    // Celsius to Fahrenheit
}else{
    // Fahrenheit to Celsius
}
```

---

## Decimal Formatting

Use:

```js
toFixed(2)
```

to display 2 decimal places.

Example:

```js
result.toFixed(2)
```

Output:

```text
25.56
```

---

## Concepts Introduced

- conversion formulas
- select-based user choice
- applying different formulas
- toFixed()
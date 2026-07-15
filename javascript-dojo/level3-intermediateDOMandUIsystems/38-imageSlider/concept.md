# Your Task

Build an image slider.

The user should be able to:

* move to the next image
* move to the previous image
* wrap around when reaching the beginning or end

---

# New Concepts

## Changing Image Source

Images can be changed dynamically by updating their `src`.

Example:

```javascript
imageAccess.src = slides[currentIndex];
```

## Wrap Around Navigation

If the slider reaches the end, go back to the beginning.

Example:

```text
Image 3
↓ Next
Image 1
```

---

# Suggested HTML

```html
<button class="prevBtn">Previous</button>

<img class="sliderImage">

<button class="nextBtn">Next</button>
```

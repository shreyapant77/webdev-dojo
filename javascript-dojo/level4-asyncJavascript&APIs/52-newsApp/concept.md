# Concepts — News App

## 1. API → IDs → Individual Resources

The first API gives an array of IDs:

```js
let storyIds = data.slice(0, 5);
```

Each ID is then used to build another API URL:

```js
let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
```

Pattern:

```text
API → IDs → individual API requests → actual objects
```

---

## 2. `for...of` for Array Values

```js
for(let id of storyIds){
    // id is the actual value
}
```

Unlike:

```js
for(let i in storyIds)
```

which gives indexes.

```text
for...in → indexes / property names
for...of → values
```

---

## 3. Multiple API Requests

One request can give data needed to make more requests:

```text
newstories
   ↓
[ID1, ID2, ID3...]
   ↓
fetch each ID
   ↓
story objects
```

---

## 4. Store API Objects in an Array

```js
let stories = [];

stories.push(dataStory);
```

This lets us collect multiple API responses and process them later.

---

## 5. Create DOM Elements Dynamically

```js
let p = document.createElement("p");
p.innerText = story.by;
newsAccess.appendChild(p);
```

Pattern:

```text
createElement()
→ set content/property
→ appendChild()
```

Useful when rendering a variable number of items.

---

## 6. `<a>` Elements from API URLs

For API-provided URLs:

```js
let link = document.createElement("a");

link.innerText = "Read Story";
link.href = story.url;
link.target = "_blank";

newsAccess.appendChild(link);
```

Use `.href` for links, not `.innerText` alone.

---

## Main Pattern

```text
Fetch IDs
→ slice first 5
→ fetch each story
→ push into stories[]
→ loop through stories[]
→ create DOM
→ append to page
```

# Leaderboard System (Feature 1)

## Task

Store player names and scores and display them.

Example:

Alice - 95
Bob - 80
Charlie - 70

---

## Object

Store a player as:

```js
{
    name: "Alice",
    score: 95
}
```

---

## Array of Objects

```js
let players = [];
```

Add a player:

```js
players.push({
    name: nameInput.value,
    score: Number(scoreInput.value)
});
```

---

## Access Object Data

```js
players[i].name
players[i].score
```

---

## Rendering

Use a loop to display all players.

```js
for(let i=0;i<players.length;i++){
    ...
}
```

---

## New Concept

One object can store multiple related values.

```js
{
    name: "Alice",
    score: 95
}
```
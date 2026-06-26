# Habit Tracker

## Features

### 1. Add Habit

Store habits as objects.

```js
habits.push({
    name: input.value,
    completed: false
});
```

---

### 2. Render Habits

Display all habits using a loop.

```js
for(let i=0;i<habits.length;i++){
    ...
}
```

Show status:

```text
Exercise ❌
Read Book ✅
```

---

### 3. Toggle Habit

Change habit status.

```js
habits[index].completed = !habits[index].completed;
```

---

### 4. Delete Habit

Remove a habit.

```js
habits.splice(index,1);
```

---

## Habit Object

```js
{
    name: "Exercise",
    completed: false
}
```

---

## Concepts Learned

* Arrays of Objects
* Loops
* Rendering
* Toggle Boolean
* CRUD Operations

### CRUD

Create → Add Habit

Read → Display Habits

Update → Toggle Habit

Delete → Delete Habit

---

## Workflow

Add Habit
↓
Store in Array
↓
Render
↓
Toggle/Delete
↓
Render Again

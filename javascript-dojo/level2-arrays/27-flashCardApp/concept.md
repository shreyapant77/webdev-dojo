# Flashcard App

## Task

Build an app that displays a question on a flashcard.

When the user clicks a button:

- show the answer
- hide the answer again
- move between flashcards

Example:

Question:
What is HTML?

Answer:
HyperText Markup Language

---

## Flashcard Object

```js
{
    question: "What is HTML?",
    answer: "HyperText Markup Language"
}
```

---

## Array Of Flashcards

```js
let cards = [
    {
        question: "What is HTML?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What is CSS?",
        answer: "Cascading Style Sheets"
    }
];
```

---

## Current Card

Use an index to track the card being displayed.

```js
let currentCard = 0;
```

---

## Accessing Data

```js
cards[currentCard].question
```

```js
cards[currentCard].answer
```

---

## Concepts Introduced

- flashcard data structure
- state tracking
- showing hidden information
- navigating through data
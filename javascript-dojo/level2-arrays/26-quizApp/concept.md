# Quiz App

## Task

Build an app that:

- display a question
- let the user choose an answer
- check if the answer is correct
- update the score
- display the current score

Example:

Question:

What is 2 + 2?

Answer:

4

Result:

Correct ✅

Score: 1

---

## Storing Questions

Questions can be stored as objects.

Example:

```js
{
    question: "What is 2 + 2?",
    answer: "4"
}
```

---

## Array Of Objects

Example:

```js
let quiz = [
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "Capital of India?",
        answer: "Delhi"
    }
];
```

---

## Score Variable

Keep track of correct answers.

Example:

```js
let score = 0;
```

When answer is correct:

```js
score++;
```

---

## Comparing Answers

Example:

```js
if(userAnswer == correctAnswer){
    score++;
}
```

---

## Concepts Introduced

- application state
- score tracking
- question objects
- answer checking
- progressing through data
# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

The await and async keyword is used to indicate that the Javascript runtime should ‘wait’ or ‘pause’ until the asynchronous function completes.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

Async and await provides a more sequential and synchronous look to handle asynchronous functions

- When do you use `async`?

When you want to run a function asynchronously

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

You use await when you’re calling a function that returns a promise. Do not use await with synchronous functions. If you use await in a synchronous function you will get a syntax error

- How do you handle errors with `await`?

You wrap the await call in a try/catch block

- What do `try`, `catch` and `throw` do? When do you use them?

Try executes a block of code if it was successful, catch executes code if it was not successful. Throw is used to throw an exception

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

If you forget to await a Promise, the function will continue executing without waiting for the Promise to resolve or reject.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

I prefer async/await as it’s easier to follow the code

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

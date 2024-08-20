# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

to debug

- What is the purpose of events and event handling?

To notify code of changes that may affect code execution

- Are all possible parameters required to use a JavaScript method or function?

No. they are not

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

addEventListener method

- What is a callback function?

A function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?

the event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

The element that is responsible for firing the event. For more information you can console.log it

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

The first one is not calling the function handleClick, which is correct, and the second is, which is incorrect

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

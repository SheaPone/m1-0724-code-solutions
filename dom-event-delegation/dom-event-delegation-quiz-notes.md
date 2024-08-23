# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

The element that is responsible for firing the event

- Why is it possible to listen for events on one element that actually happen its descendent elements?

Event bubbling

- What DOM element property tells you what type of element it is?\

Event.target.tagName

- What does the `element.closest()` method take as its argument and what does it return?

Traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector

- How can you remove an element from the DOM?

element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

Add event listeners to the parent element

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

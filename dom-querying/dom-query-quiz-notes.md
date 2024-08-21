# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

To help debug

- What is a "model"?

In the context of the Dom-querying it is referring to the structured representation of a we-page’s content

- Which "document" is being referred to in the phrase Document Object Model?

he main entry-point to the page

- What is the word "object" referring to in the phrase Document Object Model?

The instances or elements or nodes within the DOM

- What is a DOM Tree?

The tree-like structure of HTML elements

- Give two examples of `document` methods that retrieve a single element from the DOM.

querySelector and getElementById

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?

Accessing that DOM is much easier and you don’t need to search for that element again

- What `console` method allows you to inspect the properties of a DOM element object?

Console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

So that the browser can render all other elements before starting on the javascript

- What does `document.querySelector()` take as its argument and what does it return?

A selector and it returns the first element that matches that specified CSS selector

- What does `document.querySelectorAll()` take as its argument and what does it return?

A selector and it returns a NodeList of all elements in the document that match that specified CSS selector

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

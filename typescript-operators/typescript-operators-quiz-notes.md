# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

Logical AND evaluates expression two only if expression one is truthy. Logical OR evaluates expression two only if expression one is falsy. They can be used to replace an if statement.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

The logical AND expression is a short-circuit operator. If the result of one conversion is found to be false the AND operator stops and returns the original value of that false operand. The logical OR expression is evaluated left to right and is tested for possible short-circuit. Does the first true value

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

Logical operator that returns its right hand side operand when its left hand side operand is null or undefined and otherwise returns its left hand operand. It differs from || as || returns right side if left hand side is false

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

It takes three operands, very similar to if or else. Ternary operator differs from f/else as it is only one statement while if/else is a whole code block

- What is the `?.` (optional chaining) operator? When would you use it?

Accesses an object’s property or calls a function. It is useful when the properties might be missing

- What is `...` (spread) syntax? How do you use it with arrays and objects?

A type of syntax that allows an utterable to be expanded in places where zero or more arguments or elements are expected. It can combine arrays or objects

- What data types can be spread into an array? Into an object?

Numbers, arrays, objects, boolean, and strings

- How does spread syntax differ from rest syntax?

Spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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

# CSS Variables

[Demo](https://htmlpreview.github.io/?https://github.com/gabrielseco/css-visual-dictionary/blob/master/src/chapter-01/06-css-variables/index.html)

You can declare css variables scoped for one element

```css
h1 {
  --default-color: red;
  --padding: 10px;
  color: var(--default-color);
  padding: var(--padding);
}
```

But if you want css variables scoped in global you can too.

```css
:root {
  --color-h2: blue;
}

h2 {
  color: var(--color-h2);
}
```

# Gradients

[Demo](https://htmlpreview.github.io/?https://github.com/gabrielseco/css-visual-dictionary/blob/master/src/chapter-10/01-linear-gradients/index.html)

Los gradientes se setean con la propiedad background llamando a la función
linear-grandient($color1,$color2) --> si no se le dice nada por defecto afecta
verticalmente

Los gradientes horizontales pueden ser creados aplicando la propiedad to left o to right

```css
.gradient-4 {
  background: linear-gradient(to right, yellow, red);
}
```

Podemos hacer que el gradiente empiece en diagonal con

```css
.gradient-5 {
  background: linear-gradient(to top left, black, white);
}
```

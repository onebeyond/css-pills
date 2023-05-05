---
title: What is HSL color format in CSS and how to use it?
description: Learn how to use HSL color in CSS, the color format used by CSS experts that you might not know.
tags: ["color", "format"]
head:
  - - meta
    - property: "og:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=What%20is%20HSL%20color%20format%20in%20CSS%20and%20how%20to%20use%20it
  - - meta
    - name: "twitter:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=What%20is%20HSL%20color%20format%20in%20CSS%20and%20how%20to%20use%20it
  - - meta
    - property: "og:title"
      content: "What is HSL color format in CSS and how to use it?"
  - - meta
    - property: "og:description"
      content: "Learn how to use HSL color in CSS, the color format used by CSS experts that you might not know."
---

<script setup>
  import PostAuthors from '../.vitepress/components/PostAuthors.vue'
</script>

# Understanding z-index in CSS: Tips, Tricks, and Use Cases

In this pill, we will talk about a CSS property that can often be confusing: `z-index`.

## What is `z-index`?

`z-index` is a CSS property that is used to control the position of elements on the z-axis (or depth axis) in a web page. This means that `z-index` determines which element is displayed on top of another when they overlap in the same visual space.

The `z` in `z-index` refers to the z axis:

- `x` is left/right
- `y` is up/down
- `z` is forward/backward

By default, all elements have a `z-index` of `auto`, which means that their position on the z-axis is determined by their order in the HTML and in the normal flow of the document.

However, if you have two overlapping `div` elements on your page and you want to manipulate their position in the `z-axis`, you can use `z-index`. Generally, if a `div` has a higher `z-index` it will appear on top of other elements, but there are some exceptions to this rule.

-- COMPONENTE DE EJEMPLO -- https://developer.mozilla.org/en-US/docs/Web/CSS/z-index

## Values of `z-index`

The value of `z-index` can be any integer, positive or negative. A higher value means that the element will be positioned above those with a lower value.
The maximum range of `z-index` is `±2,147,483,647`, which are the maximum values of a 32-bit signed integer in JavaScript.

## How to use `z-index`

It's important to remember that `z-index` only works on elements that have a specified position (such as `absolute`, `relative`, `fixed` or `sticky`). If an element doesn't have a specified position, `z-index` will have no effect on it.

```css{3,9}
// It works
.box-with-position {
  position: relative;
  z-index: 1;
}

// It doesn't work
.box-without-position {
  /* position: relative; */
  z-index: 3;
}
```

Even though, `.box-with-position` has a lower `z-index`, it will appear on top of the `.box-without-position` because it doesn't have a specified position.

## Tips, Tricks, and Use Cases

Now that we've covered the basics, let's talk about some interesting tips, tricks, and use cases for `z-index`!

### 1. Using `z-index` with pseudo-elements

Although pseudo-elements (like `::before` or `::after`) don't have a default `z-index` value, you can still use `z-index` to position them on the z-axis. Just assign an `absolute` or `relative` position to the pseudo-element and then add a `z-index` value.

### 2. Be Careful with extremely high `z-index` values

While it may be tempting to assign extremely high values to `z-index` to ensure that an element is always on top, this can have unintended consequences. For example, it can cause the element to cover up other important elements on the page, or it can make it difficult to interact with elements underneath it.

### 3. Setting values will give you a clear vision

A good practice is to set `z-index` variables in your CSS file. This way, you can easily see which elements have a higher `z-index` than others, and you can also change the values if necessary to have a wider vision.

This will also give you a clear picture of how the elements are positioned on the z-axis and make it easier to debug any issues that may arise.

```css
:root {
  --dropdown: 10;
  --modal-backdrop: 20;
  --modal-content: 30;
  --popover: 40;
}

.dropdown {
  position: relative;
  z-index: var(--dropdown);
}
```

### 4. Be aware of children elements

Imagine you have two divs `.one` and `.two` at the same level with `z-index` values `1` and `2`. The child of first div has a z-index value set as `3`, despite of having a higher `z-index` it won't overlap div `.two` because it inherits the `z-index` value of it's parent div and then apply itself `z-index` value as it is a decimal number, it will never reach the higher value of `.two` (parent-value **.** itself-value => 1.3)

If you have 2 siblings elements, one with a `z-index` of `1` and the other with a `z-index` of `2`, the element with the higher `z-index` will appear on top of the other.
However, if the element with the lower `z-index` has a child element with a `z-index` of `3`, it won't appear on top of the element with the higher `z-index` because it's still a child of the element with the lower `z-index`.

```html
<div class="two"></div>
<div class="one">
  <div class="three"></div>
</div>
```

```css
.one {
  position: relative;
  z-index: 1;
}
.two {
  position: relative;
  z-index: 2;
}
.three {
  position: relative;
  z-index: 3;
}
```

EL TRQUITO DE LOS DECIMALES EN ZINDEX ----------------

## Conclusion

I hope this guide has been helpful in understanding the use of the `z-index` property in CSS. Remember that it's important to use `z-index` carefully and thoughtfully, taking into account its effects on the visual hierarchy of your page.

NO SE DEBE USAR

<PostAuthors :authors="['baumannzone', 'eduvilla97', 'arshiasaleem98', 'arturogbruno']" />

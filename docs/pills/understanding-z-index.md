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

## Tips, Tricks, and Use Cases CONTINUAR POR AQUI

Now that we've covered the basics, let's talk about some interesting tips, tricks, and use cases for `z-index`!

### 1. The Default Value of `z-index`

As I mentioned earlier, the default value of `z-index` is `auto`. What you may not know is that `auto` isn't actually a specific value; it simply means that the element will be placed at its default position on the z-axis.

### 2. Using `z-index` with Pseudo-Elements

Although pseudo-elements don't have a default `z-index` value, you can still use `z-index` to position them on the z-axis. Just assign an absolute or relative position to the pseudo-element and then add a `z-index` value.

### 3. Using `z-index` to Create Parallax Effects

An interesting way to use `z-index` is to create parallax effects. For example, you can create a background image and then overlay several elements with different `z-index` values. As the user scrolls down the page, the elements with lower `z-index` values will move more slowly than those with higher values, creating a sense of depth and movement.

### 4. Be Careful with Extremely High `z-index` Values

While it may be tempting to assign extremely high values to `z-index` to ensure that an element is always on top, this can have unintended consequences. For example, it can cause the element to cover up other important elements on the page, or it can make it difficult to interact with elements underneath it.

## Conclusion

I hope this guide has been helpful in understanding the use of the `z-index` property in CSS. Remember that it's important to use `z-index` carefully and thoughtfully, taking into account its effects on the visual hierarchy of your page.

NO SE DEBE USAR

<PostAuthors :authors="['baumannzone', 'eduvilla97', 'arshiasaleem98', 'arturogbruno']" />

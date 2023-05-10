---
title: "z-index in CSS: tips, tricks, and use cases"
description: "Learn how to use z-index in CSS, the property that controls the position of elements on the z-axis."
tags: ["layout", "positioning"]
head:
  - - meta
    - property: "og:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=z-index%20in%20CSS:%20tips,%20tricks,%20and%20use%20cases
  - - meta
    - name: "twitter:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=z-index%20in%20CSS:%20tips,%20tricks,%20and%20use%20cases
  - - meta
    - property: "og:title"
      content: "z-index in CSS: tips, tricks, and use cases"
  - - meta
    - property: "og:description"
      content: "Learn how to use z-index in CSS, the property that controls the position of elements on the z-axis."
---

<script setup>
  import PostAuthors from '../.vitepress/components/PostAuthors.vue'
  import ZIndex from '../.vitepress/components/z-index-in-css-tips-tricks-and-use-cases/index.vue'
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

<ZIndex />

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

## Tips, tricks, and use cases

Now that we've covered the basics, let's talk about some interesting tips, tricks, and use cases for `z-index`!

### 1. Setting values will give you a clear vision

A good practice is to set `z-index` variables in your CSS file. This way, you can easily see which elements have a higher `z-index` than others, and you can also change the values if necessary to have a wider vision.

This will also give you a clear picture of how the elements are positioned on the z-axis and make it easier to debug any issues that may arise.

```css
:root {
  --dropdown: 100;
  --modal-backdrop: 200;
  --modal-content: 300;
  --popover: 400;
}

.dropdown {
  position: relative;
  z-index: var(--dropdown);
}
```

### 2. Logic behind 100-unit `z-index` increments

Another helpful trick consists on using relatively high `z-index` values and space them out by intervals of `100`.

For example, if there are three elements that need to be stacked and their order is defined, the first one would have a `z-index` of 0, the second 100, and the third 200.

This approach allows for some flexibility in case an additional element needs to be inserted between the second and third elements in the future. In that case, a `z-index` of 110 could be used, but you can use any interval you want according to your needs.

If we had used `z-index` values of 1, 2, and 3, this option would not be available.

### 3. Be Careful with extremely high `z-index` values

While it may be tempting to assign extremely high values to `z-index` to ensure that an element is always on top, this can have unintended consequences. For example, it can cause the element to cover up other important elements on the page, or it can make it difficult to interact with elements underneath it.

We would also recommend using a number like `9999` as the _absolute top ever value_ for `z-index`, which would be visually distinguishable from the regular numbering convention. This would ensure that the highest `z-index` value in the layout is easily recognizable and can be used for elements that need to be placed on top of everything else.

### 4. Be aware of children elements

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

### 5. Avoid negative `z-index` values

Using negative `z-index` values can cause a headache or unexpected behavior, so if you don't want to bury elements under the `body` or `html` elements, you should avoid using negative values.

## Conclusion

Using `z-index` carelessly or excessively can cause problems. One of the main issues with `z-index` is that it can easily create confusion and unexpected behaviors in your layout, especially when dealing with multiple overlapping elements.

Additionally, `z-index` can also lead to accessibility issues, as it can obscure content and make it difficult or impossible for users to interact with it. This is especially true for users who rely on assistive technologies such as screen readers.

Generally, you should always avoid using `z-index` unless you don't have another option. This means you should try structuring your HTML in a way that doesn't require using `z-index` to position elements, because the order of elements in HTML matters and it's easier to maintain than using `z-index`.

But if you use `z-index` carefully, it can be a useful tool for creating certain designs and effects like dropdowns menu, transparency effects and solve any overlapping issue you might have in your website.

<PostAuthors :authors="['baumannzone', 'eduvilla97', 'arshiasaleem98', 'arturogbruno']" />

---
title: Understanding Logical Properties in CSS
description: Learn how to use logical properties in CSS, the properties that allow you to write CSS in a more natural way.
tags: ['layouts', 'writing modes']
head:
  - - meta
    - property: 'og:image' 
      content: https://ob-css-pills-og.vercel.app/api/og?title=Understanding%20Logical%20Properties%20in%20CSS
  - - meta
    - name: 'twitter:image' 
      content: https://ob-css-pills-og.vercel.app/api/og?title=Understanding%20Logical%20Properties%20in%20CSS
  - - meta
    - property: 'og:title'
      content: 'Understanding Logical Properties in CSS'
  - - meta
    - property: 'og:description'
      content: 'Learn how to use logical properties in CSS, the properties that allow you to write CSS in a more natural way.'
---

<script setup>
  import PostAuthors from '../.vitepress/components/PostAuthors.vue'
</script>

# Understanding logical properties in CSS

Logical properties are a set of CSS properties that allow you to define styles based on the logical structure of your content, rather than its physical properties. This means that you can create layouts that adapt to different text directions without having to write different styles for each variation.

Traditional CSS properties such as `margin` and `padding` are based on physical directions (`top`, `right`, `bottom`, `left`), which can become confusing when dealing with different writing modes (such as left-to-right vs right-to-left).

Logical properties can also be used for margins, padding, borders, and text alignment among others. They are supported in modern web browsers, although some older browsers may not support them.

## Inline vs block

In order to understand logical properties, you need to be familiar with the concept of inline and block elements.
In CSS, there are two types of elements: **inline** and **block**. Inline elements are displayed on the same line as other inline elements, while block elements are displayed in a new line, one on top of the other.

![Inline vs block](/understanding-logical-properties-in-css/inline-vs-block.png)

If the writing mode is **horizontal**, inline works with the `X` axis, and block works with the `Y` axis. If the writing mode is **vertical**, inline works with the `Y` axis, and block works with the `X` axis.

Depending on the writing direction, the `X` axis can be either **horizontal** or **vertical**. For example, in English, the `X` axis is **horizontal**, while in Japanese, the `X` axis is **vertical**.

The same applies to the `Y` axis. In English, the `Y` axis is **vertical**, while in Japanese, the `Y` axis is **horizontal**.

![EN vs JP](/understanding-logical-properties-in-css/en-vs-jp.png)


## Let's get sharp with writing modes

To understand the logical properties, first you need to know the concept of `writing-mode`. The `writing-mode` determines the direction in which text flows within an element, and can be either horizontal or vertical. 

Once you understand `writing-mode`, you can start using logical properties to create more flexible and adaptable layouts, regardless of the text direction.

Writing modes are defined using the `writing-mode` property, which can have one of the following values:

```css
.values {
  writing-mode: horizontal-tb;
  writing-mode: vertical-rl;
  writing-mode: vertical-lr;
}
```

For example, in English, text is written from left to right, which is known as the horizontal writing mode. However, in languages like Japanese, text is written from top to bottom, which is known as the vertical writing mode.

## Logical properties in action
In the following example we can see how logical properties work. Here we have the built-in styles for a `<p>` tag in Chrome. We can set the margins based on the direction of the text by using logical properties.

```css
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
```

### Let's break it down

Suppose, we have a paragraph in English (horizontal writing mode). In this case the `X` axis is horizontal, and the `Y` axis is vertical.

- The `margin-block-start` property is set to `1em`, which means that the **top** margin will be `1em`. 
- The `margin-block-end` property is set to `1em`, which means that the **bottom** margin will be `1em`. 
- The `margin-inline-start` property is set to `0px`, which means that the **left** margin will be `0px`. 
- The `margin-inline-end` property is set to `0px`, which means that the **right** margin will be `0px`.

Now we have another paragraph in Japanese (vertical writing mode) but using the css style mentioned before. In this case the `Y` axis is horizontal, and the `X` axis is vertical.

- The `margin-block-start` property is set to `1em`, which means that the **right** margin will be `1em`. 
- The `margin-block-end` property is set to `1em`, which means that the **left** margin will be `1em`. 
- The `margin-inline-start` property is set to `0px`, which means that the **top** margin will be `0px`. 
- The `margin-inline-end` property is set to `0px`, which means that the **bottom** margin will be `0px`.

You can use the same logic for other properties such as `padding`, `border`, etc. Read more about logical properties [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).

## When should we use logical properties?

### Short answer:  
When you want to. It’s completely up to you.

### Long answer: 
The main selling point for logical properties is **internationalization**. If you want your product to be available in a left-to-right language like English and a right-to-left language like Arabic, you can save yourself a lot of trouble by using logical properties.

Logical properties have their particular use in bidirectional environments. If you're working with a website that supports every writing mode (horizontal and vertical), you can use logical properties to ensure that your layouts look great in both directions.

<PostAuthors :authors="['baumannzone', 'eduvilla97', 'arshiasaleem98']" />
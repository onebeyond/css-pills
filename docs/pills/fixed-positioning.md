---
title: "Position fixed: Defying gravity in CSS"
description: Learn about Fixed positioning in CSS and how to use it.
tags: ["layout", "box model"]
head:
  - - meta
    - property: "og:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=Everything%20is%20a%20box
  - - meta
    - name: "twitter:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=Everything%20is%20a%20box
  - - meta
    - property: "og:title"
      content: "What is the Box Model and why it matters"
  - - meta
    - property: "og:description"
      content: "Learn about the CSS Box Model and understand why everything is a box in CSS."
---

<script setup>
  import PostAuthors from '../.vitepress/components/PostAuthors.vue'

</script>

# Position fixed: defying gravity in CSS

Position `fixed` is a close cousin of position `absolute`. The main difference is that it can only be contained by the viewport. It doesn't care about containing blocks.

An element with position `fixed` is removed from the normal document flow, and no space is created for the element in the page layout.

A fixed position element is positioned relative to the viewport, or the browser window itself. As the viewport doesn’t change when the window is scrolled, a fixed positioned element will stay right where it is when the page is scrolled. The main advantage of fixed-position elements is that they're immune to scrolling, and its final position is determined by the values of top, right, bottom, and left (or their shorthand, the `inset` property). If the element doesn't have these "anchor points", it will sit in its in-flow position, that is in the top left corner of the viewport.

This value always creates a new stacking context.

// EJEMPLO CON FIXED POSITION Y ALGO DE SCROLL

## Common Use Cases

### Scroll-to-top button

A popular use case for fixed positioning is to create a scroll-to-top button that remains visible regardless of how far down the page the user has scrolled. This button provides a convenient way for users to return to the top of the page without manually scrolling.

```css
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

### Persistent elements

Fixed positioning can be used to create elements that stay fixed at the bottom of the viewport while the rest of the page content scrolls. This is particularly useful for navigation menus, cookie banners, or footers that should always be visible.

```css
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
```

### Overlay or Modal Windows

When implementing overlay or modal windows, fixed positioning can be used to keep the overlay window fixed in the center of the screen while the underlying content remains scrollable. This ensures that the overlay remains visible and easily accessible to the user.

## Incompatibilities of fixed positioning

There are certain CSS properties that, when applied to an ancestor, can cause fixed positioning to break. If you set `position: fixed` on an element and discover that it doesn't work, you may want to inspect its ancestors elements to find the culprit. Specifically, you should pay attention to the following properties: `transform`

<PostAuthors :authors="['baumannzone', 'arturogbruno', 'eduvilla97']" />

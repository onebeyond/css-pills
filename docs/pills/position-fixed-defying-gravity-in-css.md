---
title: "Position fixed: Defying gravity in CSS"
description: Learn about Fixed positioning in CSS and how to use it.
tags: ["layout", "positioning"]
head:
  - - meta
    - property: "og:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=Position%20fixed:%20Defying%20gravity%20in%20CSS
  - - meta
    - name: "twitter:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=Position%20fixed:%20Defying%20gravity%20in%20CSS
  - - meta
    - property: "og:title"
      content: "Position fixed: Defying gravity in CSS"
  - - meta
    - property: "og:description"
      content: "Learn about Fixed positioning in CSS and how to use it."
---

<script setup>
  import PostAuthors from '../.vitepress/components/PostAuthors.vue'
</script>

# Position fixed: defying gravity in CSS

Position `fixed` is a close cousin of position `absolute`. The main difference is that it can only be contained by the viewport. It doesn't care about containing blocks.

An element with position `fixed` is removed from the normal document flow, and no space is created for the element in the page layout.

A fixed position element is positioned relative to the viewport, or the browser window itself. As the viewport doesn’t change when the window is scrolled, a fixed positioned element will stay right where it is when the page is scrolled.

The main advantage of fixed-position elements is that they're immune to scrolling, and its final position is determined by the values of top, right, bottom, and left (or their shorthand, the `inset` property). If the element doesn't have these "anchor points", it will sit in its in-flow position, that is in the top left corner of the viewport.

This value always creates a new stacking context.

## Visual example 🛟

Here is a visual example of how fixed positioning works. Notice how the fixed element (🛟) stays in the same position even when the page is scrolled through the waves of the _ocean_.

<video src="/position-fixed-defying-gravity-in-css/fixed-position.mp4" loop controls="false" autoplay muted></video>

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

Fixed positioning can be used to create elements that stay fixed at the bottom of the viewport while the rest of the page content scrolls. This is particularly useful for navigation menus, cookie banners, support chat buttons or any element that should always be visible.

### Modal windows

When implementing a modal window, fixed positioning can be used to keep the overlay window fixed in the center of the screen while the underlying content remains scrollable, unless you block scrolling using other techniques. This ensures that the overlay remains visible and easily accessible to the user.

```css
.modal {
  position: fixed;
  inset: 0px;
  z-index: 1200; // necessary for the modal to overlap with the content of the page.
}
```

## Incompatibilities of fixed positioning

There are certain CSS properties that, when applied to an ancestor, can cause fixed positioning to break. If you set `position: fixed` on an element and discover that it doesn't work, you may want to inspect its ancestors elements to find the culprit. Specifically, you should pay attention to the following properties: `transform`, `will-change` and `filter`.

If you are having problems and you think that maybe is some of this properties dealing with a `position: fixed` element, here is a magic script that will tell you the culprit.

If you have to search for all the ancestors of an element at hand, you are likely to get frustrated. To make this painful process much more easier, here is a magic script that searches any ancestor that could have any of the problematic properties.

```js
// Credits to Josh Comeau - https://www.joshwcomeau.com/
const selector = ".the-fixed-child";

function findCulprits(elem) {
  if (!elem) {
    throw new Error("Could not find element with that selector");
  }

  let parent = elem.parentElement;

  while (parent) {
    const { transform, willChange, filter } = getComputedStyle(parent);

    if (
      transform !== "none" ||
      willChange === "transform" ||
      filter !== "none"
    ) {
      console.warn("🚨 Found a culprit! 🚨\n", parent, {
        transform,
        willChange,
        filter,
      });
    }
    parent = parent.parentElement;
  }
}

findCulprits(document.querySelector(selector));
```

## Conclusion

Fixed positioning is a powerful tool that can be used to create a variety of effects. It's particularly useful for creating elements that remain visible regardless of how far down the page the user has scrolled.

<PostAuthors :authors="['baumannzone', 'arturogbruno', 'eduvilla97']" />

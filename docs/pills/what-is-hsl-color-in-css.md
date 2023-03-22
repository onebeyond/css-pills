---
title: What is HSL color format in CSS and how to use it?
description: Learn how to use HSL color in CSS, the color format used by CSS experts that you might not know.
tags: ['color', 'format']
head:
  - - meta
    - property: 'og:image' 
      content: https://ob-css-pills-og.vercel.app/api/og?title=What%20is%20HSL%20color%20format%20in%20CSS%20and%20how%20to%20use%20it
  - - meta
    - name: 'twitter:image' 
      content: https://ob-css-pills-og.vercel.app/api/og?title=What%20is%20HSL%20color%20format%20in%20CSS%20and%20how%20to%20use%20it
---

<script setup>
  import PostAuthors from '../.vitepress/components/PostAuthors.vue'
</script>

# What is HSL color format in CSS and how to use it

CSS has a lot of color formats. How many color formats do you know? Everyone knows about `RGB` and `HEX`, but there are more. One of them is `HSL`.  
It is a color format that is used by CSS pros. It is not as popular as `RGB` and `hex`, but it is worth learning. In this article, we will learn what `HSL` color is and how to use it.

`HSL` is a function that is used to set the color of an element in CSS. It is a very useful function that allows us to set the color of an element using only three values: **Hue**, **Saturation**, and **Lightness**. Below you will see each of them in detail:

## Hue

Hue is the color itself. It is represented in a color wheel in which hue can be set using numerical value that ranges from 0 to 360.

In this wheel, red is at position `0°`, yellow is at position `60°`, green is at position `120°`, cyan is at position `180°`, blue is at position `240°`, and magenta is at position `300°`. All other colors are somewhere in between.

![Hue Gif](/what-is-hsl-color-in-css/color.gif)

Here is the CSS code for the primary and secondary colors:

```css
.red {
  background-color: hsl(0deg 100% 50%);
}

.yellow {
  background-color: hsl(60deg 100% 50%);
}

.green {
  background-color: hsl(120deg 100% 50%);
}

.cyan {
  background-color: hsl(180deg 100% 50%);
}

.blue {
  background-color: hsl(240deg 100% 50%);
}

.magenta {
  background-color: hsl(300deg 100% 50%);
}
```

## Saturation

Saturation refers to the intensity of color and is represented in percentage, where `0%` is a colorless grey and `100%` is the most intense color.  
A saturation of `50%` is considered as a midpoint. If the saturation is `100%`, the color will be very vibrant, while the saturation is `0%`, the color will be completely grey.

The following images show the same color with different saturation values (`45%` and `100%`):

![Saturation 45](/what-is-hsl-color-in-css/saturation-45.png)

![Saturation 100](/what-is-hsl-color-in-css/saturation-100.png)

## Lightness

Luminosity refers to the amount of light that is reflected in the color and is also represented in percentage, where `0%` is black and `100%` is white.

A luminosity of `50%` is considered as midpoint. If the luminosity is `100%`, the color will be completely white, while the luminosity is `0%`, the color will be completely black.

The following images show the same color with different lightness values (`10%` and `90%`):

![Saturation 45](/what-is-hsl-color-in-css/lightness-10.png)

![Saturation 100](/what-is-hsl-color-in-css/lightness-90.png)

## Conclusions

The `HSL` format in CSS is an easy and efficient way to represent colors in our projects. With only three values, we can set any color we need.  
In addition, this format allows us to easily manipulate the saturation and lightness of a color to create different effects and shades.

## Advantages of HSL color format

The `HSL` color format in `CSS` has several advantages that make it popular among design and web development professionals:

- **Easy to understand and use:** the `HSL` format is very intuitive and easy to learn, making it ideal for beginners.
- **Allows for greater color control:** unlike other color formats, `HSL` allows us to adjust the saturation and luminosity of a color without affecting the hue.
- **Greater flexibility:** `HSL` allows us to create a wide range of shades and hues using just three numeric values, making it more flexible than other formats.
- **Compatible with other tools:** `HSL` is compatible with many design and web development tools, making it easy to integrate into any workflow.

## Practical example

Let's take a look at a following example of how we can use the `HSL` color format in `CSS` to create a button that changes color based on it's state, just by adjusting the saturation or lightness levels.

```css
.button {
  background-color: hsl(200, 70%, 60%);
}

.button:hover {
  background-color: hsl(200, 70%, 80%);
}

.button:active {
  background-color: hsl(200, 70%, 40%);
}
```

![HSL Color Format](/what-is-hsl-color-in-css/use-cases.png)

In this example, we've used the HSL color format to set the background color of the button to a brighter blue hue (`200` degrees on the color wheel), with a saturation level of `70%` and a lightness level of `50%`.

When the user hovers over the button, the saturation increases to `80%` creating a brighter and more vibrant shade of blue.

When the user clicks on the button, the lightness decreases to `40%`, creating a darker and more subdued shade of blue.

By using the `HSL` color format and adjusting the saturation and lightness levels, we were able to create a button that changes color based on it's state, making it more interactive and engaging for users.

<PostAuthors :authors="['baumannzone', 'eduvilla97', 'arshiasaleem98']" />

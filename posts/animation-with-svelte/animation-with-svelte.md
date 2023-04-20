---
title: Create Amazing User Interfaces Using Animation With Svelte
description: Learn how to create amazing user interfaces with Svelte.
slug: animation-with-svelte
published: 2022-9-22
category: svelte
series: false
---

# Create Amazing User Interfaces Using Animation With Svelte

{% youtube id="3RlBfUQCiAQ" title="Animation With Svelte" %}

## Table of Contents

## Beyond Whimsy

{% img src="crossfade.webp" alt="Diagram showing how crossfade works" %}

The `crossfade` function creates a pair of transitions called `send` and `receive`:

- When an element is “sent” it looks for a corresponding element being “received” and creates a transition that animates the element to that position and fades it out
- The reverse happens when it's “received”
- If there is nothing to animate to the `fallback` transition is used
- You can set options for `crossfade` including `delay`, `duration`, `easing` and `fallback`

{% video src="animate-flip.mp4" %}

> 🧪 The code is available on [GitHub](https://github.com/joysofcode/animation-with-svelte) or you can view the examples on [StackBlitz](http://stackblitz.com/github/joysofcode/animation-with-svelte).

I hope you're ready to become an animation wizard and delight your users!

## Transitions

A transition is triggered by an element entering or leaving the page as a result of a state change.

Svelte exposes seven transition functions `fade`, `blur`, `fly`, `slide`, `scale`, `draw` and `crossfade`.

{% video src="flip-gsap.mp4" %}

You can use the same intro and outro transition with `transition:fade` but if you want to use different intro and outro transitions use `in:` and `out:`.

```html:+page.svelte {2, 13-15} showLineNumbers
<script lang="ts">
  import { fade } from 'svelte/transition'

  let animate = false
</script>

<label>
  <input type="checkbox" bind:checked={animate} />
  Animate
</label>

{#if animate}
  <p transition:fade>
    There are no mistakes, only happy accidents.
  </p>
{/if}

<style>
  label {
    position: absolute;
    bottom: 4%;
    left: 4%;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
</style>
```

Each transition function accepts at least a `delay`, `duration` and `easing` parameter but others might accept more if you consult the [documentation](https://svelte.dev/docs#run-time-svelte-transition).

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

| Element         | Markdown Syntax                            |
| --------------- | ------------------------------------------ |
| Heading         | # H1 ## H2 ### H3                          |
| Bold            | **bold text**                              |
| Italic          | _italicized text_                          |
| Blockquote      | > blockquote                               |
| Ordered List    | 1. First item 2. Second item 3. Third item |
| Unordered List  | - First item - Second item - Third item    |
| Code            | `code`                                     |
| Horizontal Rule | ---                                        |
| Link            | [title](https://www.example.com)           |
| Image           | ![alt text](image.jpg)                     |

Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

| Element           | Markdown Syntax                                       |
| ----------------- | ----------------------------------------------------- |
| Table             |                                                       |
| ---               | ---                                                   |
| Header            | Title                                                 |
| Paragraph         | Text                                                  |
| Fenced Code Block | `{"firstName": "John","lastName": "Smith","age": 25}` |

|Footnote | Here's a sentence with a footnote. [^1] |
|[^1]: This is the footnote. |

| Heading ID      | ### My Great Heading {#custom-id}                                              |
| --------------- | ------------------------------------------------------------------------------ |
| Definition List | term : definition                                                              |
| Strikethrough   | ~~The world is flat.~~                                                         |
| Task List       | - [x] Write the press release - [ ] Update the website - [ ] Contact the media |
| Emoji           | (see also Copying and Pasting Emoji) That is so funny! :joy:                   |
| Highlight       | ==very important words==                                                       |
| Subscript       | H~2~O                                                                          |
| Superscript     | X^2^                                                                           |

You can specify a custom easing function or use a built-in [Svelte easing functions](https://svelte.dev/docs#run-time-svelte-easing) to give character to your animations — use the [ease visualiser](https://svelte.dev/examples/easing) to explore different easing options.

{% video src="flip-svelte.mp4" %}

I want to animate a title and need to split the lines which is simple using Svelte:

- First I'm going to declare the lines and use empty lines to create a pause between other text that's going to animate in
- I'm going to use the `in:fly` intro transition and set a starting `y` position using the built-in `backOut` easing function
- To get a stagger effect where the next element animating in is delayed you can multiply the `index` of the element by some time `300ms` for the `delay`
- I want the text to appear from the bottom of the element instead of fading in from the starting `y` position, so I set `overflow: hidden` on the parent

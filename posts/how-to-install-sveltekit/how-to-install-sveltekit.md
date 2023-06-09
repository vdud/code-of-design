---
title: How to Install SvelteKit
description: Svelte is an innovative, compiler-based framework designed for building highly performant and interactive user interfaces. Created by Rich Harris, a graphics editor at the New York Times, Svelte has quickly gained traction among developers for its unique approach to web application development. Unlike traditional frameworks like React and Vue, which rely on a runtime library to manage and update the DOM, Svelte operates at compile time, generating highly optimized JavaScript code that updates the DOM directly.
slug: how-to-install-sveltekit
published: 2023-6-1
category: svelte
series: false
---

# How to Install SvelteKit

## Table of Contents

## Install NodeJs

Go to [NodeJs](https://nodejs.org/en/download/) and download the latest version of NodeJs.

Or you go to my full guide on [How to Install NodeJs](https://www.codeofdesign.xyz/how-to-install-nodejs)

## Install SvelteKit

Open the terminal and run the following commands:

```bash:terminal
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```

Add `--host` tag after `npm run dev` to run the app in your local network.

```bash:terminal
npm run dev --host
```

## Example of Routing System in SvelteKit

{% img src="routing.webp" alt="Example of Routing System by joy of code." %}

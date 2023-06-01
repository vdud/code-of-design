---
title: Create a Todo List with SvelteKit
description: Learn to build an efficient Todo List using SvelteKit. This tutorial guides you through the process of creating a dynamic and user-friendly task management application with the power of SvelteKit's components and state management. Stay organized and boost your productivity with this hands-on project.
slug: create-a-todo-list-with-svelte-kit
published: 2023-4-30
category: svelte
series: false
---

# Create a Todo List with SvelteKit

## Table of Contents

## Install SvelteKit

Install NodeJs to use node package manager

Go to [NodeJs](https://nodejs.org/en/download/) and download the latest version of NodeJs.

Or you go to my full guide on [How to Install NodeJs](https://www.codeofdesign.xyz/how-to-install-nodejs)

```bash:terminal
npm create latest@svelte todo-list
cd todo-list
npm install
npm run dev
```

Add `--host` tag after `npm run dev` to run the app in your local network.

```bash:terminal
npm run dev --host
```

## HTML Setup of Todo List

Firstly Open up the +page.svelte file and add the following Html code:

```html:+page.svelte
<div class="board">
	<input placeholder="what needs to be done?" on:keydown={keydown} bind:value={inputValue} />
	<div class="TodosndDone">
		<div class="todoBox left">
			<h2>TODO💭</h2>
			{#each todos.filter((t) => !t.done) as todo (todo.id)}
				<label>
					<input type="checkbox" on:change={() => mark(todo, true)} />
					<div class="todoTextBox">{todo.description}</div>
					<button on:click={() => remove(todo)}>X</button>
				</label>
			{/each}
		</div>

		<div class="todoBox right">
			<h2>DONE☑︎</h2>
			{#each todos.filter((t) => t.done) as todo (todo.id)}
				<label>
					<input type="checkbox" checked on:change={() => mark(todo, false)} />
					<div class="todoTextBox">{todo.description}</div>
					<button on:click={() => remove(todo)}>X</button>
				</label>
			{/each}
		</div>
	</div>
</div>
```

Now almost all of the html is done, now we need to add some java script functionality to make work. as we can see we have red underline under `keydown`, `inputValue`, `todos`, `mark` & `remove`

Let's start with `keydown` & `inputValue` as these 2 are for the Input value that we are going to put in to add the todos, It also includes `Add` function to add it to the list.

## Adding JavaScript Functionality to Todo List

Start with adding `<script lang="ts">` tag on top of the component

```html:+page.svelte
<script lang="ts">
	// Input Function
	let inputValue = '';

	const keydown = (e: KeyboardEvent): void => {
		if (e.key === 'Enter' && inputValue !== '') add(e.target as HTMLInputElement);
	};
</script>
```

You'll now see an error underline under `add` function as we have not created an `add` to-do function, now lets create that function but first create sample todos with `uids`.

Copy and Paste this code in script tag anywhere after `keydown` function, We are just making a todo varaiable with some values.

```javascript:+page.svelte
	//Todo Functions
	let uid = 1;

	let todos = [
		{ id: uid++, done: false, description: 'This is the first Task' },
		{ id: uid++, done: false, description: 'This is the second Task' },
		{ id: uid++, done: true, description: 'This is the Completed Task' }
	];
```

Then Right after that add this `add` function

```javascript:+page.svelte
	const add = (input: HTMLInputElement) => {
		const todo = {
			id: uid++,
			done: false,
			description: input.value
		};

		todos = [todo, ...todos];
		inputValue = '';
	};
```

## CSS Styling of Todo List

Let's just add some simple css to make more understandable.

Create a css file and import it in our project.

I would recommend to create that file in the `lib` folder alias that is available inside svelte.

create a file in `src/lib/asster/app.css`
and paste this css in that file

```css:src/lib/asster/app.css
* {
	font-family: sans-serif;
}
body {
	margin: 0;
	padding: 0;
}
h2 {
	text-align: center;
	height: 30px;
}
.TodosndDone {
	display: flex;
	width: 100%;
}
.todoBox {
	display: flex;
	flex-direction: column;
	width: 50%;
	border: 1px solid black;
}
label {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 6px 4px;

	background-color: #eee;
}
.todoTextBox {
	width: 100%;
}
.board {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	overflow-x: hidden;
	/* no scrollbar */
}
.board > input {
	font-weight: bold;

	width: calc(100vw - 40px);
	height: 50px;

	font-size: 20px;
	padding: 0 20px;
	border: none;
	border-bottom: 1px solid black;
}

button {
	text-indent: 100000%;
	background-color: transparent;
	border: none;
	transition: all 0.2s ease-in-out;
	background: no-repeat 50% 50%
		url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%56676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
}

button:hover {
	cursor: pointer;
	background: no-repeat 50% 50%
		url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
}
```

## Adding CSS to HTML Through JavaScript in Svelte

Now import the file into that component `+page.svelte`

Add this after `<script lang="ts">` tag.

```javascript:+page.svelte
// add after <script> tag on top
import '$lib/assets/app.css';
```

We are seeing error underline under `mark` and `remove` as these 2 functions are not created yet, so lets create them without wasting any time.

Add these 2 functions under that script tag under `add` function

```javascript:+page.svelte
	const remove = (todo: { id: number }) => {
		todos = todos.filter((t) => t !== todo);
	};

	const mark = (todo: { id: number; done: boolean; description: string }, done: boolean): void => {
		todo.done = done;
		remove(todo);
		todos = todos.concat(todo);
	};
```

Now the todo app is done. We have successfully made our first app, congratulations.
Now there's something to do to make it more interesting, so let's do some design improvement, as this channel's name is `Code of Design`

## Adding Visual Animation on HTML Component directly in Svelte

Svelte is an amazing framework designed by Web Viz artist
we have some good animation functionality already installed in svelte as a built in feature
To get it starting and working
we have to import that liberary into the codebase
Start with Copy & Pasting the following code after `<script lang="ts">`

```javascript:+page.svelte
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
```

Now make a function that use css to animate the progress of task

```javascript:+page.svelte
	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});
```

now add them to the `<label>` tag of both todos and done boxes

Change the `<label>` tag of both the divs to the following

```html:+page.svelte
<label in:recieve={{ key: todo.id }} out:send={{ key: todo.id }}>
```

Hope you Enjoyed the tutorial
If you have any question or suggestion, please comment on the youtube video.
Thankyou.

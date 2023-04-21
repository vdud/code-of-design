<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let overlay = false;

	onMount(() => {
		const headingElement = document.querySelector('h1');

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0 // invoke when element is not visible
		};

		function handleIntersect([entry]: any) {
			!entry.isIntersecting ? (overlay = true) : (overlay = false);
		}

		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(headingElement as Element);

		return () => observer.unobserve(headingElement as Element);
	});
</script>

{#if overlay}
	<div transition:fade={{ duration: 300 }} class="overlay" />
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		/* background-image: var(--post-overlay-bg); */
		background-image: var(--post-overlay-bg);
		background-color: #0006;
		backdrop-filter: blur(50px);
		-webkit-backdrop-filter: blur(50px);
		z-index: -1;
	}
</style>

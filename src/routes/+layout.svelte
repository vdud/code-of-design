<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import Header from '$lib/shared/ui/header.svelte';

	import Transition from '$lib/shared/transition/index.svelte';
	import LiteYouTubeEmbed from '$lib/embed/youtube.svelte';

	import '../styles/styles.scss';
</script>

<LiteYouTubeEmbed />

<Transition transition={{ type: 'fade', duration: 250 }}>
	<div class="grid">
		<Header />
		<Transition transition={{ type: 'page' }}>
			<slot />
		</Transition>
	</div>
</Transition>

<style>
	:global(.grid) {
		height: 100%;
		max-width: 1400px;
		display: grid;
		grid-template-columns: repeat(12, [column-start] 1fr);
		column-gap: var(--spacing-24);
		margin-inline: auto;
		padding: 0 var(--spacing-16);
	}

	:global(.grid > *) {
		grid-column: column-start / span 12;
	}

	@media (min-width: 1240px) {
		.grid {
			padding: 0;
		}
	}
</style>

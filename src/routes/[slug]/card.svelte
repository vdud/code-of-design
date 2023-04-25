<script lang="ts">
	import { ArrowNarrowRightIcon, MailIcon, PencilAltIcon } from '@rgossiaux/svelte-heroicons/outline';

	import Newsletter from '$lib/shared/ui/newsletter.svelte';

	// import { twitter } from '$lib/api/config';
</script>

<div class="card">
	<div class="decorative">
		<MailIcon width="24" height="24" aria-hidden="true" />
	</div>
	<span class="title">Subscribe For Updates</span>
	<Newsletter />
</div>

<style>
	.card {
		position: relative;
		padding: var(--spacing-32);
		border: 4px solid var(--clr-primary);
		border-radius: var(--rounded-20);
	}

	.card .decorative {
		display: grid;
		place-content: center;
		width: 48px;
		height: 48px;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-50%) translateY(-50%);
		border-radius: 50%;
		background-color: var(--clr-bg);
	}

	.card .decorative :global(svg) {
		color: var(--clr-primary);
	}

	.card .title {
		font-size: var(--font-24);
		font-weight: 700;
		line-height: 32px;
	}

	.card :global(form) {
		margin: var(--spacing-16) 0;
	}
</style>

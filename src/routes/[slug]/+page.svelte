<script lang="ts">
	import NewsLetterCard from './card.svelte';
	import Clipboard from './clipboard.svelte';
	import Overlay from './overlay.svelte';

	import { fileUrl, postImage, siteName, siteUrl } from '$lib/api/config';

	export let data;

	let editUrl = `${fileUrl}/${data.frontmatter.slug}/${data.frontmatter.slug}.md`;
	let image = `${postImage}${encodeURIComponent(data.frontmatter.title)}.png`;
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>

	<meta content={data.frontmatter.description} name="description" />

	<meta content={data.frontmatter.title} property="og:title" />
	<meta content={image} property="og:image" />
	<meta content={siteUrl} property="og:url" />
	<meta content={data.frontmatter.description} property="og:description" />
	<meta content={siteName} property="og:site_name" />

	<!-- <meta content={twitterHandle} name="twitter:creator" /> -->
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={data.frontmatter.title} name="twitter:title" />
	<meta content={data.frontmatter.description} name="twitter:description" />
	<meta content={image} name="twitter:image" />
</svelte:head>

<Clipboard />

<main>
	<Overlay />

	<div class="prose">
		{@html data.content}
	</div>

	<div class="cards">
		<NewsLetterCard />
	</div>
</main>

<style>
	.cards {
		display: grid;
		row-gap: var(--spacing-32);
		max-width: var(--post-txt-length);
		margin: var(--spacing-32) 0;
		margin-inline: auto;
		scale: 0.8;

		box-shadow: var(--shadow-lg);
		backdrop-filter: blur(50px);
		-webkit-backdrop-filter: blur(50px);

		border-radius: 10px;
	}
</style>

<script lang="ts">
	import { ArrowNarrowRightIcon } from '@rgossiaux/svelte-heroicons/outline';

	import Newsletter from '$lib/shared/ui/newsletter.svelte';
	import Posts from '$lib/shared/ui/posts.svelte';

	import { siteDescription, siteImage, siteName, siteTitle, siteUrl } from '$lib/api/config';
	// import { onMount } from 'svelte';

	export let data;

	let pageData = (data = JSON.parse(data.body));
</script>

<svelte:head>
	<title>{siteTitle}</title>

	<meta content={siteDescription} name="description" />

	<meta content={siteTitle} property="og:title" />
	<meta content={siteImage} property="og:image" />
	<meta content={siteUrl} property="og:url" />
	<meta content={siteDescription} property="og:description" />
	<meta content={siteName} property="og:site_name" />

	<!-- <meta content={twitterHandle} name="twitter:creator" /> -->
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={siteTitle} name="twitter:title" />
	<meta content={siteDescription} name="twitter:description" />
	<meta content={siteImage} name="twitter:image" />
</svelte:head>

<main class="mainPage">
	<section class="hero">
		<div class="latest-post">
			<span class="kicker">Latest post</span>
			<h1 class="title">{pageData.latestPost.title}</h1>
			<p class="description">
				{pageData.latestPost.description}
			</p>
			<a class="continue-reading" href={pageData.latestPost.slug}>
				<span>Continue reading</span>
				<ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
			</a>
		</div>

		<div class="divider" />

		<div class="newsletter">
			<h2>Subscribe for updates</h2>
			<Newsletter />
			<h3 class="h3">also add <span class="email_h3"> codeofdesign@outlook.com </span> to your contact list, otherwise the mail will go to spam.</h3>
		</div>
	</section>

	<!-- <Posts posts={pageData.popular}>
		<h3 class="defPosts popular" slot="title">Popular</h3>
	</Posts> -->

	<Posts posts={pageData.latest}>
		<h3 class="defPosts latest" slot="title">Latest</h3>
		<a class="defPosts" slot="see-more" href="/articles">
			<span>See more articles</span>
			<ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
		</a>
	</Posts>

	<!-- <Posts posts={pageData.series}>
		<h3 class="defPosts series" slot="title">Series</h3>
		<a slot="see-more" href="/series">
			<span>See more series</span>
			<ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
		</a>
	</Posts> -->

	<!-- <Posts posts={pageData.picks}>
		<h3 class="defPosts picks" slot="title">Picks</h3>
	</Posts> -->
</main>

<style>
	.h3 {
		font-size: 1.3rem;
		color: var(--primaryThemeInverted);
	}
	h2 {
		color: var(--primaryThemeInverted);
	}
	.email_h3 {
		background-color: var(--primaryThemeInverted);
		color: var(--primaryTheme);
		border-radius: 5px;
		text-shadow: none;
		margin: 0 3px;
		padding: 0 3px;
	}
	.mainPage {
		padding: 0 10px;
		padding-bottom: 3rem;
		/* background-color: var(--tertiaryTheme); */
		/* box-shadow: var(--shadow-lg);
		backdrop-filter: blur(5px); */

		border-radius: 10px;

		/* padding-bottom: 10px; */
		margin-bottom: 10px;
	}
	.defPosts {
		box-shadow: var(--shadow-md);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);

		padding: 10px 2rem;
		border-radius: 10px;
		color: #fff;
	}

	.latest {
		-webkit-text-stroke: 0.5px var(--black);
	}
	.hero {
		margin-top: var(--spacing-64);
		padding: var(--spacing-24);
		background: var(--primaryTheme);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-sm);
		transform: translateY(10px);
	}

	.latest-post .kicker {
		font-weight: 500;
		color: var(--clr-hero-txt);
	}

	.latest-post .title {
		padding: var(--spacing-8) 0 var(--spacing-16) 0;
		color: var(--clr-primary);
	}

	.latest-post .description {
		color: var(--clr-hero-txt);
	}

	.latest-post .continue-reading {
		width: max-content;
		display: flex;
		align-items: center;
		margin-top: var(--spacing-32);
	}

	.latest-post a {
		display: flex;
		gap: var(--spacing-16);
	}

	.divider {
		border-bottom: 1px solid var(--clr-hero-divider-bg);
		margin: var(--spacing-32) 0;
	}

	.newsletter p {
		color: var(--clr-hero-txt);
	}

	.newsletter h2 {
		font-size: var(--font-24);
	}

	@media (min-width: 860px) {
		.hero {
			display: grid;
			grid-template-columns: repeat(12, [column-start] 1fr);
			column-gap: var(--spacing-24);
		}

		.latest-post {
			grid-column: column-start 2 / span 4;
		}

		.divider {
			grid-column: column-start 7 / span 1;
			justify-self: center;
			margin: 0;
			border-left: 1px solid var(--clr-hero-divider-bg);
			border-bottom: none;
		}

		.newsletter {
			display: grid;
			place-content: center;
			grid-auto-rows: min-content;
			grid-column: column-start 8 / span 4;
		}
	}
</style>

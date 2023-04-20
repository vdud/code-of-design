<script lang="ts">
	import Heading from '$lib/shared/ui/heading.svelte';
	import Posts from '$lib/shared/ui/posts.svelte';

	export let data;

	const articleData = JSON.parse(data.body);
</script>

<svelte:head>
	<title>Articles</title>
	<meta content="List of {articleData.posts.length} articles." name="description" />
</svelte:head>

<div class="bg">
	<Heading>Articles</Heading>

	<Posts posts={articleData.posts}>
		<div class="container" slot="title">
			<h3>All Articles</h3>
			<div>
				<span class="results">{articleData.posts.length}</span> results
			</div>
		</div>
	</Posts>
</div>
<div class="whiteSpace" />

<style>
	.bg {
		box-shadow: var(--shadow-md);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		border-radius: 10px;

		padding: 0 10px;
		padding-bottom: 10px;
	}
	.whiteSpace {
		height: 33px;
	}
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 10px;

		box-shadow: var(--shadow-md);
		backdrop-filter: blur(199px);
		-webkit-backdrop-filter: blur(199px);
		border-radius: 10px;
	}

	.results {
		font-weight: 700;
	}
</style>

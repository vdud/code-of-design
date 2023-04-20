<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		var elems = document.getElementsByClassName('header');
		var confirmIt = function (e: any) {
			if (!confirm('Are you sure you want to go to Home Page?')) e.preventDefault();
		};
		for (var i = 0, l = elems.length; i < l; i++) {
			elems[i].addEventListener('click', confirmIt, false);
		}
	});
</script>

<header>
	<div>
		<a href="/" class="header" id="header">
			<div>
				<img src="/favicon.png" alt="logo_COD" class="logoIcon" />
			</div>
			<div>
				<h1 class="logo">CODE OF DESIGN</h1>
			</div>
		</a>
	</div>
</header>

<style>
	.header {
		border-radius: 10px;
		margin-top: 10px;
		margin: 2vw;
		color: var(--primaryTheme);

		box-shadow: var(--shadow-lg);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);

		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 10px 20px;

		text-decoration: none;
	}
	.logoIcon {
		width: 69px;
	}

	.logo {
		font-size: clamp(1.5rem, 5vw, 4rem);
		-webkit-text-stroke: 1px var(--black);
	}
</style>

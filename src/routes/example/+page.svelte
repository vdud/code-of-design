<div class="absolute">
	{#each { length: 300 } as _, i}
		<div class="divFlex">
			{#each { length: 600 } as _, i}
				<div class="box" />
			{/each}
		</div>
	{/each}
</div>

<style>
	.absolute {
		width: 100%;
		height: 100%;

		top: 0;
		left: 0;
		position: absolute;
		background-color: white;
		overflow: hidden;

		z-index: 0;
	}

	.box {
		height: 10px;
		width: 10px;
		/* border: 0.1px solid #0002; */
		border-top: 0.1px solid rgba(217, 16, 16, 0.133);
		border-bottom: 0.1px solid rgba(38, 86, 174, 0.133);
	}
	.box:hover {
		background-color: black;
	}
	.divFlex {
		display: flex;
		width: fit-content;
		height: fit-content;
	}
</style>

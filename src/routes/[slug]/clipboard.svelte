<script lang="ts">
	import { onMount } from 'svelte';
	const copyBtn = `<span class="sr-only">Copy</span>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
          </svg>`;

	const copiedBtn = `
        <span class="sr-only">Copied</span>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      `;

	onMount(() => {
		const copyBtnElement = document.querySelectorAll('.copy');

		function copyToClipboard(event: Event) {
			const buttonElement = event.currentTarget as HTMLButtonElement;
			const codeTitleElement = buttonElement.parentElement;
			const codeElement = codeTitleElement.nextElementSibling;
			navigator.clipboard.writeText(codeElement.textContent);

			buttonElement.innerHTML = copiedBtn;

			// after certain timeout turn back

			setTimeout(() => {
				buttonElement.innerHTML = copyBtn;
			}, 3000);
		}

		copyBtnElement.forEach((btn) => {
			btn.innerHTML = copyBtn;
			btn.addEventListener('click', copyToClipboard);
		});

		return () => copyBtnElement.forEach((btn) => btn.removeEventListener('click', copyToClipboard));
	});
</script>

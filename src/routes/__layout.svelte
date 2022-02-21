<script>
    import "../app.css";
</script>

<svelte:head>
  <title>SvelteKit + Firebase demo</title>
</svelte:head>

<slot />

<style lang="postcss">
    :global(h1) {
        @apply font-semibold text-xl;
    }
    :global(button) {
        @apply rounded-lg bg-gray-900 text-white w-full py-2 mt-2;
    }
    :global(body) {
        @apply flex flex-col place-items-center place-content-center h-screen w-screen;
    }
    :global(div) {
        @apply w-full max-w-xs flex flex-col gap-2;
    }
    :global(input) {
        @apply w-full rounded p-1 border border-gray-200;
    }
</style>

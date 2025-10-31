<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="sticky top-0 z-20 h-16 w-full flex justify-center items-center drop-shadow-xl bg-earth-100 ">
	<p class="text-lg text-earth-700 text-center"><span class="text-2xl font-bold text-earth-800">Simple Blog</span></p>
</header>


{@render children?.()}

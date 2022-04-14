<script>
	export let name;
	export let surname;
	export let fruits;

	// #key method (like useEffect)
	setTimeout(() => { surname = 'trump' }, 2000);

	let content = `<p style="color: red">HELLO WORLD!</p>`;

	let count = 0;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<hr>
	<h3>#each & #if method</h3>
	{#each fruits as fruit}
		<p>{fruit} {#if fruit.includes('b')} <span>(includes 'b' letter)</span> {/if}</p>
	{/each}
	<hr>
	<h3>#await method (get client ip)</h3>
	{#await fetch('https://api.ipify.org/?format=json')}
		<p>loading...</p>
	{:then value}
		{#await value.json() then data}
			<p>{data.ip}</p>
		{/await}
	{:catch error}
		<p>ERROR: {error}</p>
	{/await}
	<hr>
	<h3>#key method</h3>
	{#key surname}
		<p>{surname}</p>
	{/key}
	<hr>
	<h3>@html method</h3>
	{@html content}
	<hr>
	<h3>@debug method</h3>
	<!--{@debug fruits}-->
	<p>same as console.log, look at the console</p>
	<hr>
	<h3>on: events</h3>

	<h5>on:click</h5>
	<button on:click="{() => count += 1}">Add</button>
	<button on:click="{() => count -= 1}">Delete</button>
	count: {count}

	<hr>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
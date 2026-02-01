<script>
    import Button from './components/button.svelte';
    const handleClick = (msg) => {
        alert(msg);
        console.log(msg);
    };

    let items = [{ name: 'bread', qty: 2 },
                  { name: 'water', qty: 1 },
                  { name: 'milk', qty: 5 }];

    import { onMount } from "svelte";
    import { apiData, catFacts } from './store.js';
    onMount(async () => {
      fetch("https://cat-fact.herokuapp.com/facts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        apiData.set(data);
      }).catch(error => {
        console.log(error);
        return [];
      });
    });

</script>

  <Button 
    label="press me" 
    bgColor="bg-yellow-500" 
    onclick={() => handleClick('Hello from Svelte Kit')} 
  />


<h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 mt-10 mb-6 tracking-tight">
    Welcome to my website
</h1>

<h1 class="text-2xl font-bold mb-2">grocery list</h1>
<ul>
	{#each items as item, i}
		<li>{i + 1}:{item.name} x {item.qty}</li>
	{/each}
</ul>

<main>
	<h1>Cat Facts</h1>
	<ul>
	{#each $catFacts as fact}
		<li>{fact}</li>
	{/each}
	</ul>
</main>





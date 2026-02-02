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
  import { apiData, bookshelfList, isLoading, errorMsg } from './store.js';

  onMount(async () => {
    isLoading.set(true);
    errorMsg.set("");

    const userId = "103477348515135554720";
    const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        apiData.set(data);
      })
      .catch(error => {
        console.log(error);
        errorMsg.set(error.message);
      })
      .finally(() => {
        isLoading.set(false);
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
  <h1>My Google Books</h1>

  {#if $errorMsg}
    <p style="color: red;">error:{$errorMsg}</p>
  {:else if $isLoading}
    <p>loading</p>
  {:else}
    <ul>
      {#each $bookshelfList as shelf}
        <li>
          <strong>{shelf.name}</strong> total {shelf.count} books
        </li>
      {:else}
        <li>No public bookshelves found.</li>
      {/each}
    </ul>
  {/if}
</main>
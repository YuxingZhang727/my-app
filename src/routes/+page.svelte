<script>
  import { onMount } from "svelte";
  import { apiData, catImages } from './store.js';
  import Button from './components/button.svelte';
    
  let items = [
    { name: 'Apple', qty: 5 },
    { name: 'Milk', qty: 2 }
  ];

  function handleClick(msg) {
    alert(msg);
  }

  onMount(async () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(response => {
        if (!response.ok) throw new Error("server error");
        return response.json();
      })
      .then(data => {
        apiData.set(data);
      })
      .catch(error => {
        console.error("API request failed:", error);
      });
  });
</script>

<Button label="press me" bgColor="bg-yellow-500" onclick={() => 
  handleClick('Hello from Svelte Kit')} 
  />


<main class="p-8 max-w-6xl mx-auto">
  <section class="mb-10 p-4 bg-white rounded-lg shadow-sm border">
    <h2 class="text-2xl font-bold mb-4">Grocery List</h2>
    <ul class="list-disc pl-5">
      {#each items as item, i}
        <li class="text-gray-700">{i + 1}: {item.name} x {item.qty}</li>
      {/each}
    </ul>
  </section>

  <section>
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800 border-t pt-8">Cat Gallery</h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      {#each $catImages as imageUrl}
        <div class="aspect-square rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
          <img src={imageUrl} alt="cat" class="w-full h-full object-cover" />
        </div>
      {:else}
        <p class="col-span-full text-center text-gray-400">loading...</p>
      {/each}
    </div>
  </section>
</main>
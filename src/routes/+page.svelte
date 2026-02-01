<script>
    import Button from './components/button.svelte';
    const handleClick = (msg) => {
        alert(msg);
        console.log(msg);
    };

</script>

  <Button 
    label="press me" 
    bgColor="bg-yellow-500" 
    onclick={() => handleClick('Hello from Svelte Kit')} 
  />


<h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 mt-10 mb-6 tracking-tight">
    Welcome to my website
</h1>

<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>



<script>
  let { label, bgColor, onclick } = $props();
</script>

<button 
  {onclick}
  class="{bgColor} text-white px-8 py-3 rounded-full font-medium transition-all
         hover:scale-105 active:scale-95 shadow-lg
         focus:outline-none focus:ring-4 focus:ring-opacity-50"
>
  {label}
</button>
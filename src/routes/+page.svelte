<script>
  import "../app.css";
  import { scale } from "svelte/transition";

  let colors = [];

  function generateColors(num) {
    colors = Array.from(
      { length: num },
      () =>
        `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")}`
    );
  }
</script>

<main
  class="min-h-screen flex items-center justify-center bg-gradient-to-r from-neutral-900 to-neutral-950 relative overflow-x-hidden"
>
  <div class="flex py-32 px-6 md:p-0 flex-col md:flex-row items-start md:items-center justify-around gap-8 z-10 container">
    <!-- Stylish Button with Hover Animation -->
    <div class="w-1/2 flex flex-col items-start gap-4">
      <h2 class="text-xl md:text-5xl text-violet-200 font-black">Create new color palette</h2>
      <p class="text-lg md:text-2xl text-white font-semibold">Here you can create random palettes and save them. This way you can work with palettes that have never been used before. Only save the ones you like!</p>
      <button
        on:click={() => generateColors(5)}
        class="relative inline-flex items-center px-6 py-3 overflow-hidden font-medium text-white bg-violet-800 hover:bg-violet-900 transition-all rounded-lg shadow-md group"
      >
        <span class="relative z-10">New Palette</span>
      </button>
    </div>

    <!-- Color palette container with flex and wrap -->
    <div class="w-1/2 flex items-center gap-8 flex-wrap md:justify-center">
      {#each colors as color (color)}
        <div
          class="w-32 h-32 border border-slate-800 flex items-center justify-center text-white font-bold rounded-lg shadow-md"
          style="background-color: {color}"
          in:scale={{ start: 0.8, duration: 300 }}
        >
          <p>{color}</p>
        </div>
      {/each}
    </div>
  </div>

  <div
    class="w-96 h-96 bg-violet-600 absolute left-1/2 rounded-full blur-3xl opacity-10"
  />
</main>

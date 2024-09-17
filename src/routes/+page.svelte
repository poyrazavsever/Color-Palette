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
  <div
    class="flex py-32 px-6 md:p-0 flex-col md:flex-row items-start md:items-center justify-around gap-32 z-10 container"
  >
    <div class="w-full md:w-1/2 flex flex-col items-start gap-4">
      <h2 class="text-xl md:text-5xl text-amber-200 font-black">
        Create new color palette
      </h2>
      <p class="text-lg md:text-2xl text-white font-semibold">
        Here you can create random palettes and save them. This way you can work
        with palettes that have never been used before. Only save the ones you
        like!
      </p>
      <button
        on:click={() => generateColors(3)}
        class="relative inline-flex items-center px-6 py-3 overflow-hidden font-medium text-white bg-yellow-600 hover:bg-yellow-700 transition-all rounded-lg shadow-md group"
      >
        <span class="relative z-10">New Palette</span>
      </button>
    </div>

    <div class="w-full md:w-1/2 flex flex-col items-start gap-12 flex-wrap">
      <div class="flex flex-wrap items-center gap-8">
        {#each colors as color (color)}
          <div
            class="w-32 h-32 border border-slate-800 flex items-center justify-center text-white font-bold rounded-lg shadow-md"
            style="background-color: {color}"
            in:scale={{ start: 0.8, duration: 300 }}
          >
            <p class="text-neutral-50">{color}</p>
          </div>
        {/each}
      </div>

      {#if colors.length > 0}
        <button
          on:click={() => console.log("Palette saved!")}
          class="items-start px-6 py-3 overflow-hidden font-medium text-white bg-yellow-600 hover:bg-yellow-700 transition-all rounded-lg shadow-md group"
        >
          <span class="relative z-10">Save Palette</span>
        </button>
      {/if}
    </div>
  </div>

  <div
    class="w-96 h-96 bg-yellow-300 absolute left-1/2 rounded-full blur-3xl opacity-10"
  ></div>
</main>

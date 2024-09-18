<script>
  import toast from 'svelte-french-toast';
  export let palette = [];
  export let isOpen = false;

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // Modalı kapatma fonksiyonu
  const closeModal = () => {
    isOpen = false;
    dispatch('close');
  };

  // Palet renklerini kopyalama fonksiyonu
  const copyPaletteToClipboard = () => {
    // Palet renklerini bir stringe dönüştür
    const colorString = palette.join('\n');
    navigator.clipboard.writeText(colorString)
      .then(() => {
        toast.success('Palette copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy palette: ', err);
      });
  };
</script>

{#if isOpen}
  <div class="fixed flex items-center justify-center bg-black backdrop-blur-lg z-50">
    <div class="bg-neutral-950 bg-opacity-30 border border-neutral-800 p-6 rounded shadow-lg w-80">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold text-neutral-50">Palette Details</h3>
        <div class="flex gap-4">
          <button on:click={copyPaletteToClipboard} class="text-neutral-100 hover:text-neutral-300">
            Copy
          </button>
          <button on:click={closeModal} class="text-neutral-100 hover:text-neutral-300">
            &times;
          </button>
        </div>
      </div>

      <!-- Renkleri göster -->
      <div class="flex flex-col items-center">
        {#each palette as color}
          <div class="flex items-center justify-between w-full mb-2">
            <div class="w-12 h-12 rounded border border-neutral-500" style="background-color: {color}"></div>
            <p class="text-neutral-100 font-medium ml-4">{color}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

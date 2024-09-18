<script>
    export let color = '';
    export let isOpen = false;
  
    // Modal kapatılırken isOpen'ı false yap
    const closeModal = () => {
      isOpen = false;
    };
  </script>
  
  {#if isOpen}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded shadow-lg w-64">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-bold">Color Details</h3>
          <button on:click={closeModal} class="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div class="mt-4 flex flex-col items-center">
          <div
            class="w-24 h-24 mb-4 border border-gray-200"
            style="background-color: {color}"
          ></div>
          <p class="text-gray-700 font-medium">{color}</p>
        </div>
      </div>
    </div>
  {/if}
  
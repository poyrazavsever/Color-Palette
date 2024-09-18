<script>
  import { db } from "../../utils/firebase";
  import { collection, getDocs } from "firebase/firestore";
  import { onMount } from "svelte";
  import Modal from "../../components/Modal.svelte"; // Modal bileşenini import et

  let palettes = [];
  let selectedPalette = []; // Seçilen palet (birden fazla renk)
  let isModalOpen = false; // Modal açık mı kapalı mı

  // Sayfa yüklendiğinde Firestore'dan verileri çek
  onMount(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "palettes"));
      palettes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Palettes fetched:", palettes);
    } catch (error) {
      console.error("Error fetching palettes:", error);
    }
  });

  // Palet seçildiğinde modalı açan fonksiyon
  const openModal = (palette) => {
    selectedPalette = palette; // Seçilen paleti kaydet
    isModalOpen = true; // Modalı aç
  };

  // Modal kapanma olayını yakalayacak fonksiyon
  const handleModalClose = () => {
    isModalOpen = false; // Modal kapanınca isOpen değerini false yap
  };
</script>

<main class="relative min-h-screen flex justify-center bg-gradient-to-r from-neutral-900 to-neutral-950 overflow-x-hidden">
  <div class="flex py-32 px-6 md:p-0 flex-col md:flex-row items-start md:items-center justify-around gap-32 z-10 container">
    <div class="w-full flex flex-col items-start gap-24">
      <h2 class="text-xl md:text-5xl text-amber-200 font-black">
        All Palettes
      </h2>

      <div class="flex flex-wrap gap-6">
        {#each palettes as palette (palette.id)}
          <div class="flex flex-col items-start gap-4">
            <!-- Her paleti göstermek için -->
            <button class="flex cursor-pointer" on:click={() => openModal(palette.palette)}> <!-- Palete tıklandığında modal açılır -->
              {#each palette.palette as color}
                <div
                  class="w-12 h-32 border border-slate-800 flex items-center justify-center text-white font-bold rounded shadow-md"
                  style="background-color: {color}"
                ></div>
              {/each}
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Modal bileşeni -->
  <Modal palette={selectedPalette} isOpen={isModalOpen} on:close={handleModalClose} />
</main>

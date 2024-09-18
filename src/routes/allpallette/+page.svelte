<script>
    import {db} from "../../utils/firebase"
    import { collection, getDocs } from "firebase/firestore";
    import { onMount } from "svelte";
  
    let palettes = [];
  
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
  </script>
  
  <main class="relative min-h-screen flex justify-center bg-gradient-to-r from-neutral-900 to-neutral-950 overflow-x-hidden">
    <div
      class="flex py-32 px-6 md:p-0 flex-col md:flex-row items-start md:items-center justify-around gap-32 z-10 container"
    >
      <div class="w-full flex flex-col items-start gap-4">
        <h2 class="text-xl md:text-5xl text-amber-200 font-black">
          All Palettes
        </h2>
        <p class="text-lg md:text-2xl text-white font-semibold">
          Explore all the saved color palettes below.
        </p>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each palettes as palette (palette.id)}
            <div class="flex flex-col items-start gap-4">
              <div class="text-white font-bold">
                Palette ID: {palette.id}
              </div>
              <div class="flex gap-2">
                {#each palette.palette as color}
                  <div
                    class="w-16 h-16 border border-slate-800 flex items-center justify-center text-white font-bold rounded-lg shadow-md"
                    style="background-color: {color}"
                  >
                    <p class="text-neutral-50">{color}</p>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </main>
  
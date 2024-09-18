<script>
    import { onMount } from 'svelte';
    import { getAuth } from 'firebase/auth';
    import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
    import { goto } from '$app/navigation';
  import toast from 'svelte-french-toast';
  
    const auth = getAuth();
    const db = getFirestore();
  
    let palettes = [];
    let user = auth.currentUser;
    
    // Sayfa yüklendiğinde Firestore'dan verileri çek
    onMount(async () => {
      if (!user) {
        // Kullanıcı giriş yapmamışsa yönlendir
        goto('/');
        toast.error('You need to be logged in to view this page.');
        return;
      }
  
      try {
        const q = query(collection(db, "palettes"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        palettes = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("User palettes fetched:", palettes);
      } catch (error) {
        console.error("Error fetching user palettes:", error);
      }
    });
  </script>
  
  <main class="relative min-h-screen flex justify-center bg-gradient-to-r from-neutral-900 to-neutral-950 overflow-x-hidden">
    <div class="flex py-32 px-6 md:p-0 flex-col md:flex-row items-start md:items-center justify-around gap-32 z-10 container">
      <div class="w-full flex flex-col items-start gap-24">
        <h2 class="text-xl md:text-5xl text-amber-200 font-black">Your Palettes</h2>
        
        <div class="flex flex-wrap gap-6">
          {#each palettes as palette (palette.id)}
            <div class="flex flex-col items-start gap-4">
              <div class="flex">
                {#each palette.palette as color}
                  <div
                    class="w-12 h-32 border border-slate-800 flex items-center justify-center text-white font-bold rounded shadow-md"
                    style="background-color: {color}"
                  ></div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </main>
  
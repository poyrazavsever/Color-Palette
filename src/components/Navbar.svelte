<script>
    import { onMount } from 'svelte';
    import { onAuthStateChanged } from 'firebase/auth';
    import {auth} from "../utils/firebase"
  
    let user = null;
  
    onMount(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user = currentUser;
      });
  
      return () => {
        unsubscribe();
      };
    });
  </script>
  
  <nav class="absolute top-0 w-full h-16 bg-neutral-950 flex items-center px-4 z-20">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center gap-6">
        <a href="/" class="text-xl font-medium text-neutral-300 hover:text-neutral-100">Home</a>
        <a href="/allpalette" class="text-xl font-medium text-neutral-300 hover:text-neutral-100">All Palette</a>
      </div>
      <div class="ml-auto flex items-center gap-6">
        {#if user}
          <a href="/yourpalette" class="text-xl font-medium text-neutral-300 hover:text-neutral-100">Your Palette</a>
        {:else}
          <a href="/login" class="text-xl font-medium text-neutral-300 hover:text-neutral-100">Login</a>
        {/if}
      </div>
    </div>
  </nav>
  
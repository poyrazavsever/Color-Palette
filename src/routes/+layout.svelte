<!-- src/routes/__layout.svelte -->
<script>
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import {Toaster} from "svelte-french-toast"
</script>

<div class="relative">
  <Navbar />
  
  <Toaster />

  <main>
    <slot></slot>
  </main>

  <Footer />
</div>

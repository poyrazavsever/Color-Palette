<!-- src/routes/__layout.svelte -->
<script>
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<div class="relative">
  <Navbar />

  <main>
    <slot></slot>
  </main>

  <Footer />
</div>

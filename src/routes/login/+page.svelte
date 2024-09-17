<script>
    import { onMount } from 'svelte';
    import "../../app.css"
    let activeTab = 'signup';
    
    onMount(() => {
      const switchTab = (tab) => {
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
        document.querySelector(`#${tab}`).classList.remove('hidden');
        
        document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
        document.querySelector(`.tab-button[data-tab="${tab}"]`).classList.add('active');
      };
      
      switchTab(activeTab);
      
      window.switchTab = switchTab; // Tab değişimini tarayıcıya uygun hale getirme
    });
  
    const handleTabChange = (tab) => {
      activeTab = tab;
      switchTab(tab);
    };
  </script>
  
  <main class="min-h-screen flex items-center justify-center bg-gradient-to-r from-neutral-900 to-neutral-950 relative overflow-x-hidden">
    <div class="w-96 h-96 bg-yellow-300 absolute left-1/3 rounded-full blur-3xl opacity-10"/>
    
    <div class="relative z-10 bg-neutral-950 bg-opacity-30 border border-neutral-800 px-8 py-16 rounded-lg shadow-lg w-80">

      <div class="flex border-b mb-4">
        <button type="button" class="tab-button active px-4 py-2 text-neutral-200 font-medium" data-tab="signup" on:click={() => handleTabChange('signup')}>Kayıt Ol</button>
        <button type="button" class="tab-button px-4 py-2 text-neutral-200 font-medium" data-tab="login" on:click={() => handleTabChange('login')}>Giriş Yap</button>
      </div>
  
      <div id="signup" class="tab-content w-full">

        <form class="flex flex-col gap-8 pt-4">

          <div>
            <label for="signup-email" class="block text-sm font-medium text-neutral-200">E-posta</label>
            <input type="email" id="signup-email" class="mt-1 block w-full px-3 py-2 bg-neutral-950 bg-opacity-30 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 sm:text-sm text-white" required />
          </div>

          <div>
            <label for="signup-password" class="block text-sm font-medium text-neutral-200">Şifre</label>
            <input type="password" id="signup-password" class="mt-1 block w-full px-3 py-2 bg-neutral-950 bg-opacity-30 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 sm:text-sm text-white" required />
          </div>

          <button type="submit" class="w-full bg-yellow-500 text-neutral-950 font-semibold px-4 py-2 rounded-md hover:bg-yellow-600 transition-all">Kayıt Ol</button>

        </form>

      </div>
  
      <div id="login" class="tab-content hidden">

        <form class="flex flex-col gap-8 pt-4">

          <div>
            <label for="login-email" class="block text-sm font-medium text-neutral-200">E-posta</label>
            <input type="email" id="login-email" class="mt-1 block w-full px-3 py-2 bg-neutral-950 bg-opacity-30 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 sm:text-sm text-white" required />
          </div>

          <div>
            <label for="login-password" class="block text-sm font-medium text-neutral-200">Şifre</label>
            <input type="password" id="login-password" class="mt-1 block w-full px-3 py-2 bg-neutral-950 bg-opacity-30 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 sm:text-sm text-white" required />
          </div>

          <button type="submit" class="w-full bg-yellow-500 text-neutral-950 font-semibold px-4 py-2 rounded-md hover:bg-yellow-600 transition-all">Giriş Yap</button>

        </form>
      </div>
    </div>
  </main>
  
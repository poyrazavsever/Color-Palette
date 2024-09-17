import { sveltekit } from '@sveltejs/kit/vite';
import auto from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: auto(),
    // diğer yapılandırmalar
  },
  plugins: [sveltekit()]
};
